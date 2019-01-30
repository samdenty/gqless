import { isEqual } from 'lodash'
import { QueryNode, IQueryNodeArg } from './QueryNode'
import { Query } from '../Query'

export class QueryField<T = any, ParentT = any> extends QueryNode<T, ParentT> {
  public fetched = false
  public fetching = false

  private _args = new Array<IQueryNodeArg>()
  private _alias: string = null
  public name: string

  constructor(query: Query) {
    super(query)
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      name: this.name,
      args: this.args,
      alias: this.alias,
    }
  }

  public async fetch() {
    return await this.query.fetchNodes([this])
  }

  /**
   * Stage the node for fetching
   */
  public stage() {
    this.query.batcher.stageNode(this)
  }

  /**
   * Unstage the node for fetching
   */
  public unstage() {
    this.query.batcher.unstageNode(this)
  }

  public get aliasedName() {
    if (this.alias) return `${this.name}__${this.alias}`

    return this.name
  }

  public get supportsArgs() {
    const result = this.lookup()
    if (!result) return null

    console.log(result.field)
    return result.field.args
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
    this.stage()
  }
}
