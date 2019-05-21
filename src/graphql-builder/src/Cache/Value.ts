import { Node, ScalarNode, ArrayNode } from '../Node'
import { onEvent } from '../utils'

export type UValueData =
  | string
  | number
  | boolean
  | { [key: string]: Value }
  | Value[]
  | null

export class Value {
  constructor(public node: Node<any>, public data?: UValueData) {}

  public onChange = onEvent<() => void>()

  public update(data: UValueData) {
    const prevData = this.data
    this.data = data

    if (data !== prevData) {
      this.onChange.emit()
    }
  }

  public get(key: string | number): Value | undefined {
    if (this.data && typeof this.data === 'object') {
      if (this.data.hasOwnProperty(key)) {
        return (this.data as any)[key]
      }
    }

    return undefined
  }

  public set(key: string | number, value: Value) {
    const prevValue = this.get(key)
    ;(this.data as any)[key] = value

    if (prevValue !== value) {
      this.onChange.emit()
    }
  }

  public toJSON(): any {
    if (this.node instanceof ScalarNode) {
      return this.data
    }

    if (this.data instanceof Array) {
      return this.data.map(value => value.toJSON())
    }

    if (this.data instanceof Object) {
      const obj: any = {}
      Object.entries(this.data).forEach(([key, value]) => {
        obj[key] = value.toJSON()
      })
      return obj
    }

    return this.data
  }
}
