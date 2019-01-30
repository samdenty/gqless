import { Query } from '../Query'
import { resolveNode, getNodePath } from '../utils'
import { QueryField } from './QueryField'
import { nodes } from '.'
import { QueryRoot } from './QueryRoot'

export type IQueryNodeArg = [string, string]

export interface IQueryNodeOptions {
  args?: IQueryNodeArg[]
  alias?: string
}

export class QueryNode<T = any, P = any> {
  protected disposers = new Array<() => any>()
  public errors = new Set()

  public beenUsedAsFunc: boolean = false
  public fields = new Array<QueryField<T[keyof T]>>()
  public parent: P extends null ? null : QueryNode<P> = null

  constructor(protected query: Query) {}

  public toJSON() {
    const fields: any[] = this.fields.map(field => field.toJSON())

    return {
      constructorName: this.constructor.name,
      beenUsedAsFunc: this.beenUsedAsFunc,
      fields,
    }
  }

  static fromJSON(
    query: Query,
    parent: QueryNode = null,
    {
      constructorName = this.name,
      ...json
    }: ReturnType<typeof nodes[number]['prototype']['toJSON']>
  ) {
    const Node = nodes.find(({ name }) => name === constructorName)
    const node = new Node(query)

    Object.assign(node, json, {
      parent,
      fields: json.fields.map(f => QueryNode.fromJSON(query, node, f)),
    })

    return node
  }

  public getField(field: string, alias?: string) {
    return this.fields.find(f => {
      const sameField = f.name === field
      const sameAlias = !alias || f.alias === alias

      return sameField && sameAlias
    })
  }

  public addField(field: string, alias?: string): QueryField {
    const existingField = this.getField(field, alias)
    if (existingField) return existingField

    const queryField = new QueryField(this.query)
    queryField.name = field
    queryField.parent = this

    this.fields.push(queryField)

    queryField.stage()

    return queryField
  }

  public resolve() {
    return resolveNode(this.query, this)
  }

  public get path() {
    return getNodePath(this)
  }

  public get value(): T {
    if (this.errors.size) throw Array.from(this.errors)

    const { value, unresolvedNode } = this.resolve()

    if (unresolvedNode) {
      throw new Error(
        unresolvedNode === this
          ? `Can't get node's value! waiting to be resolved`
          : `Can't get node's value! waiting for parent to resolve`
      )
    }

    return value
  }

  public lookup() {
    const path = this.path.map(node =>
      node instanceof QueryRoot
        ? 'Query'
        : node instanceof QueryField
        ? node.name
        : null
    )

    const result = this.query.typeEngine.lookupPath(path)

    return result
  }

  public get kind() {
    const result = this.lookup()
    if (!result) return null

    return result.fieldType ? result.fieldType.kind : result.type.kind
  }

  public dispose() {
    this.fields.forEach(node => node.dispose())
    this.disposers.forEach(dispose => dispose())
  }
}
