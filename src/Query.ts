import { merge, isEqual } from 'lodash'
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

type RecurseNode<T> = { [key in keyof T]: Node<T[key]> }

type NodeCallback<T, isRoot extends boolean> = (
  queryArgs?: { [key: string]: any },
  options?: IQueryNodeOptions
) => Node<T, isRoot>

interface NodeValuePromise<T>
  extends Pick<
    Promise<T extends any[] ? RecurseNode<T> : T extends object ? Node<T> : T>,
    'then' | 'catch'
  > {}

type NodeField<T, isRoot extends boolean = false> = NodeCallback<T, isRoot> &
  NodeValuePromise<T> & {
    __node: isRoot extends true ? QueryRoot<T> : QueryField<T>
  }

export type Node<T = any, isRoot extends boolean = false> = T extends object
  ? RecurseNode<T> & NodeField<T, isRoot>
  : NodeField<T, isRoot>

type Response<Data = any> = { data: Data; errors: any }

export interface IQueryOptions {
  schema: Schema
  fetchQuery(query: DocumentNode): Promise<Response> | Response

  proxyHandler?(
    node: QueryNode,
    path: string | symbol,
    context: { calledAsFunction: boolean; target: NodeCallback<any, boolean> }
  ): any
  queryName?: string

  // If set to true, the proxy will return an array to capture sub-field selections
  optimisticArrays?: boolean

  // If set to true, queries will be combined into the one
  mergeQueries?: boolean
}

export class Query<Data = any> {
  public options: IQueryOptions
  public currentNode: QueryNode
  public root = new QueryRoot<Data>(this)
  public response: Response<Data> = this.clear()

  public builder: QueryBuilder
  public batcher: QueryBatcher
  public typeEngine: TypeEngine

  constructor(options: IQueryOptions) {
    this.options = {
      optimisticArrays: true,
      mergeQueries: true,
      ...options,
    }

    this.builder = new QueryBuilder(this)
    this.batcher = new QueryBatcher(this)
    this.typeEngine = new TypeEngine(this.options.schema)
  }

  public clear() {
    this.response = {
      data: {
        // user: { name: 'test', age: 'basdasasd' },
        // users: [{ name: 'test', age: 'basdasd' }],
        // a: { b: { c: 1 } },
        // number: 1,
      } as any,
      errors: null,
    }
    return this.response
  }

  public async fetchNodes(nodes: QueryField[]) {
    nodes.forEach(node => (node.fetching = true))

    const query = this.builder.buildQuery(nodes)

    try {
      const response = await this.options.fetchQuery(query)
      nodes.forEach(node => (node.fetched = true))

      merge(this.response.data, response.data)

      return response
    } catch (e) {
      throw e
    } finally {
      nodes.forEach(node => (node.fetching = false))
    }
  }

  private createProxy = <T, isRoot extends boolean = false>(
    currentNode: QueryNode
  ): Node<T, isRoot> => {
    this.currentNode = currentNode

    const valueResolver = new Promise((resolve, reject) => {
      if (currentNode instanceof QueryField) {
        if (currentNode.fetched) {
          return resolve(currentNode.value)
        }
      }
    })

    const nodeCallback: NodeCallback<T, isRoot> = (
      argsObject = null,
      { alias } = {}
    ) => {
      if (currentNode instanceof QueryField) {
        const aliasedNode = currentNode.parent.getField(currentNode.name, alias)
        const differentNode = aliasedNode !== currentNode

        const node = differentNode
          ? currentNode.parent.addField(currentNode.name, alias)
          : currentNode

        // Update node
        const args = Object.entries(argsObject)

        node.beenUsedAsFunc = true
        if (argsObject) node.args = args
        node.alias = alias

        if (differentNode) return this.createProxy(node)
      }

      return createProxy(true)
    }

    const api: Partial<NodeField<T>> = {
      then: valueResolver.then.bind(valueResolver),
      catch: valueResolver.catch.bind(valueResolver),
      __node: currentNode as any,
    }

    const createProxy = (calledAsFunction: boolean) =>
      new Proxy(nodeCallback, {
        get: (target, path: string | symbol) => {
          if (api.hasOwnProperty(path)) return api[path]

          const returnValue = this.options.proxyHandler
            ? this.options.proxyHandler(currentNode, path, {
                calledAsFunction,
                target,
              })
            : undefined

          if (typeof path === 'string' || typeof path === 'number') {
            const queryField = currentNode.addField(path)

            return returnValue !== undefined
              ? returnValue
              : this.createProxy(queryField)
          }

          return returnValue
        },
      }) as Node<T, isRoot>

    return createProxy(false)
  }

  public data = this.createProxy<Data, true>(this.root)

  public dispose() {
    this.root.dispose()
    this.batcher.dispose()
  }
}
