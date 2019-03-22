import { Query } from '../Query'
import { resolveNode, getNodePath } from '../utils'
import { QueryField, QueryFieldJSON, QueryRoot } from '.'
import { LookupResult } from '../TypeEngine'

const fromEntries = iterable =>
  iterable.reduce(
    (obj, { 0: key, 1: val }) => Object.assign(obj, { [key]: val }),
    {}
  )

export type QueryNodeJSON<T> = { [key in keyof T]: QueryFieldJSON<T[key]> }

export class QueryNode<T = any> {
  protected disposers = new Array<() => any>()

  public errors = new Set()
  public fields = new Array<QueryField<T[keyof T]>>()

  constructor(protected query: Query, public parent: QueryNode) {}

  public toJSON(): QueryNodeJSON<T> {
    const fields = this.fields.map(field => [field.name, field.toJSON()])

    return fromEntries(fields)
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

    const queryField = new QueryField(this.query, this, field)

    // If it's not in the schema, return undefined
    if (!queryField.definition) return undefined

    this.fields.push(queryField)
    queryField.stage()

    return queryField
  }

  public resolve() {
    const resolution = resolveNode(this.query, this)

    if (resolution && resolution.unresolvedNode) {
      this.query.middleware.forEach(
        m => m.onUnresolvedNode && m.onUnresolvedNode(resolution.unresolvedNode)
      )
    }

    return resolution
  }

  public get path() {
    return getNodePath(this)
  }

  private resolveValue: (value: T) => void
  public value = this.getValuePromise()

  private getValuePromise() {
    return new Promise<T>(resolve => {
      this.resolveValue = resolve
    })
  }

  private currentValue: T
  public nextValue() {
    const value = this.getValue()
    this.resolveValue(value)

    if (this.currentValue !== value) {
      this.currentValue = value

      this.value = this.getValuePromise()
      this.resolveValue(value)
    }

    this.fields.forEach(field => field.nextValue())
  }

  public getValue(): T {
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

  private _definition: LookupResult
  public get definition() {
    if (!this._definition) this.updateDefinition()

    return this._definition
  }

  private updateDefinition() {
    const path = this.path.map(node =>
      node instanceof QueryRoot
        ? 'Query'
        : node instanceof QueryField
        ? node.name
        : null
    )

    const definition = this.query.typeEngine.lookupPath(path)

    this._definition = definition
  }

  public dispose() {
    this.fields.forEach(node => node.dispose())
    this.disposers.forEach(dispose => dispose())
  }
}
