import { merge } from 'lodash'
import {
  QueryNode,
  IQueryNodeOptions,
  QueryRoot,
  QueryField,
} from './QueryNode'
import { QueryBuilder } from './QueryBuilder'
import { QueryBatcher } from './QueryBatcher'
import { TypeEngine, Schema } from './TypeEngine'
import { DocumentNode } from 'graphql'
import { QueryMiddleware, defaultMiddleware } from './QueryMiddleware'

type RequiredKeys<T> = {
  [K in keyof T]-?: ({} extends { [P in K]: T[K] } ? never : K)
}[keyof T]

type ArgMap = '__args'

type RecurseNode<T extends any> = {
  [key in Exclude<keyof T, ArgMap>]: Node<T[key], T[ArgMap][key]>
}

type NodeCallback<T, Args> = RequiredKeys<Args> extends never
  ? (queryArgs?: Args, options?: IQueryNodeOptions) => Node<T>
  : (queryArgs: Args, options?: IQueryNodeOptions) => Node<T>

interface NodeValuePromise<T>
  extends Pick<
    Promise<T extends any[] ? RecurseNode<T> : T extends object ? Node<T> : T>,
    'then' | 'catch'
  > {}

export type Node<T = any, Args = unknown> = (T extends object
  ? RecurseNode<T>
  : unknown) &
  (Args extends object ? NodeCallback<T, Args> : unknown) &
  (T extends object ? {} : T /* NodeValuePromise<T>*/)

export type QueryResponse<Data = any> = { data: Data; errors: any }

export interface IQueryOptions {
  schema: Schema
  fetchQuery(query: DocumentNode): Promise<QueryResponse> | QueryResponse
  queryName?: string
  middleware?(middleware: QueryMiddleware[], query: Query): QueryMiddleware[]

  // If set to true, the proxy will return an array to capture sub-field selections
  optimisticArrays?: boolean

  // If set to true, queries will be combined into the one
  mergeQueries?: boolean
}

export type ProxyInterceptor = (
  target: unknown,
  prop: string | symbol
) => unknown

export class Query<Data = any> {
  public options: IQueryOptions
  public currentNode: QueryNode
  public root = new QueryRoot<Data>(this)
  public response: QueryResponse<Data> = this.clear()

  public builder: QueryBuilder
  public batcher: QueryBatcher
  public middleware: QueryMiddleware[]
  public typeEngine: TypeEngine

  constructor(options: IQueryOptions) {
    this.options = {
      optimisticArrays: true,
      mergeQueries: true,
      ...options,
    }

    this.builder = new QueryBuilder(this)
    this.batcher = new QueryBatcher(this)
    this.middleware = this.options.middleware
      ? this.options.middleware(defaultMiddleware, this)
      : defaultMiddleware

    this.typeEngine = new TypeEngine(this.options.schema)

    this.data = this.createProxy(this.root)
  }

  public clear() {
    this.response = {
      data: {} as Data,
      errors: null,
    }
    return this.response
  }

  public async fetchNodes(nodes: QueryField[]) {
    nodes.forEach(node => (node.fetching = true))

    const query = this.builder.buildDocument(...nodes)

    this.middleware.forEach(m => m.onFetch && m.onFetch({ nodes, query }))

    let error: any
    try {
      var response = await this.options.fetchQuery(query)
    } catch (e) {
      error = e
    }

    if (!error) merge(this.response.data, response.data)

    nodes.forEach(node => {
      node.fetching = false
      node.fetched = true

      node.nextValue()
    })

    if (error) {
      this.middleware.forEach(
        m => m.onFetched && m.onFetched({ nodes, query, error })
      )

      throw error
    }

    this.middleware.forEach(
      m => m.onFetched && m.onFetched({ nodes, query, response })
    )

    return response
  }

  private createProxy = <T, Args>(
    currentNode: QueryNode,
    interceptor?: ProxyInterceptor
  ): Node<T, Args> => {
    this.currentNode = currentNode

    const nodeCallback = (
      argsObject: Args = null,
      { alias }: IQueryNodeOptions = {}
    ) => {
      if (currentNode instanceof QueryField) {
        const aliasedNode = currentNode.parent.getField(currentNode.name, alias)
        const differentNode = aliasedNode !== currentNode

        const node = differentNode
          ? currentNode.parent.addField(currentNode.name, alias)
          : currentNode

        // Update node
        const args = Object.entries(argsObject)

        if (argsObject) node.args = args
        node.alias = alias

        if (differentNode) return this.createProxy<T, Args>(node)
      }

      return createProxy(false)
    }

    const target = {}

    const createProxy = (callable: boolean) =>
      new Proxy(callable ? nodeCallback : target, {
        get: (target, prop: string | symbol) => {
          if (interceptor) {
            const value = interceptor(target, prop)
            if (value !== undefined) return value
          }

          let customReturnValue: any
          for (const m of this.middleware) {
            if (!m.proxyGetter) continue

            const value = m.proxyGetter(currentNode, prop, interceptor => {
              if (typeof prop === 'string' || typeof prop === 'number') {
                const queryField = currentNode.addField(prop)
                if (queryField) return this.createProxy(queryField, interceptor)
              }
            })

            if (value !== undefined) {
              customReturnValue = value
              break
            }
          }

          if (typeof prop === 'string' || typeof prop === 'number') {
            const queryField = currentNode.addField(prop)

            if (customReturnValue !== undefined) return customReturnValue
            if (queryField) return this.createProxy(queryField)
          }

          return customReturnValue
        },

        has(target, key) {
          if (currentNode.definition.type.kind === 'OBJECT') {
            if (key in currentNode.definition.schemaType.fields) return true
          }

          return key in target
        },

        ownKeys(target) {
          const keys: (string | number | symbol)[] = []

          if (currentNode.definition.type.kind === 'OBJECT') {
            keys.push(...Object.keys(currentNode.definition.schemaType.fields))
          }

          for (const key of Reflect.ownKeys(target)) {
            if (!keys.includes(key)) {
              keys.push(key)
            }
          }

          return keys
        },

        getOwnPropertyDescriptor(target, p) {
          if (p === 'prototype')
            return Reflect.getOwnPropertyDescriptor(target, p)

          return {
            enumerable: true,
            configurable: true,
          }
        },
      }) as Node<T, Args>

    return createProxy(currentNode.definition.args)
  }

  public data: Node<Data>

  public dispose() {
    this.root.dispose()
    this.batcher.dispose()
  }
}
