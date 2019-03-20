import { isEqual } from 'lodash'
import { QueryNode, QueryNodeJSON, IQueryNodeArg } from '.'
import { Query } from '../Query'

export type QueryFieldJSON<T> = QueryNodeJSON<T> & {
  $_: { args: any; alias: string }
}

export class QueryField<T = any, ParentT = any> extends QueryNode<T, ParentT> {
  public fetched = false
  public fetching = false

  private _args = new Array<IQueryNodeArg>()
  private _alias: string = null
  public name: string

  constructor(query: Query) {
    super(query)
  }

  public toJSON(): QueryFieldJSON<T> {
    return {
      ...super.toJSON(),
      $_: {
        args: this.args,
        alias: this.alias,
      },
    } as any
  }

  public async fetch() {
    return await this.query.fetchNodes([this])
  }

  /**
   * Stage the node for fetching
   */
  public stage() {
    this.query.batcher.stage(this)
  }

  /**
   * Unstage the node for fetching
   */
  public unstage() {
    this.query.batcher.unstage(this)
  }

  public get aliasedName() {
    if (this.alias) return `${this.name}__${this.alias}`

    return this.name
  }

  public get args() {
    return this._args
  }
  public set args(value) {
    const changed = !isEqual(value, this._args)
    this._args = value

    if (changed) this.stage()
  }

  public get alias(): string {
    return this._alias
  }
  public set alias(value: string) {
    this._alias = value

    if (this._alias != value) this.stage()
  }
}
