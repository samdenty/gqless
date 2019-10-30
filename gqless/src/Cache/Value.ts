import { Node, ArrayNode, ObjectNode, Outputable } from '../Node'
import { createEvent } from '@gqless/utils'

export type UValueData =
  | string
  | number
  | boolean
  | { [key: string]: Value }
  | Value[]
  | null

let id = 0

const VALUE = Symbol('value')

export class Value<TNode extends Node & Outputable = Node & Outputable> {
  public id = ++id

  private _data!: UValueData
  public references = new Map<Value, Set<string | number>>()

  constructor(
    public node: TNode,
    data: UValueData = node instanceof ArrayNode ? [] : {}
  ) {
    this.data = data
    this.onSet((key, value) => {
      if (!this.references.has(value)) this.references.set(value, new Set())

      const referencedKeys = this.references.get(value)!

      if (!referencedKeys.size) this.onReference.emit(value)
      referencedKeys.add(key)

      this.onSet
        .filter(k => k === key)
        .then(() => {
          referencedKeys.delete(key)
          if (referencedKeys.size) return

          this.references.delete(value)
          this.onUnreference.emit(value)
        })
    })
  }

  // When a new Value is associated with a key
  public onSet = createEvent<(key: string | number, value: Value) => void>()
  // When data is updated (reference equality)
  public onChange = createEvent<(prevData?: UValueData) => void>()

  // When a Value becomes referenced
  public onReference = createEvent<(value: Value) => void>()
  // When a Value becomes de-refenerced
  public onUnreference = createEvent<(value: Value) => void>()

  public get data() {
    return this._data
  }

  public set data(data: UValueData) {
    const prevData = this._data
    if (data === prevData) return

    this._data = data

    if (data && typeof data === 'object') {
      Object.entries(data).forEach(([key, value]) => {
        key = String(key)
        if ((prevData as any)?.[key] === value) return

        this.onSet.emit(key, value)
      })
    }

    this.onChange.emit(prevData)
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
    key = String(key)
    const prevValue = (this.data as any)?.[key]
    if (prevValue === value) return

    ;(this.data as any)[key] = value
    this.onSet.emit(key, value)
  }

  public toJSON(deep = true): any {
    if (deep !== true) return this.data

    if (this.node instanceof ArrayNode) {
      if (!this.data) return null

      return (this.data as any[]).map(value => value.toJSON())
    }

    if (this.node instanceof ObjectNode) {
      if (!this.data) return null

      const obj: any = {
        __typename: this.node.name
      }

      // obj[VALUE] = this

      Object.entries(this.data).forEach(([key, value]) => {
        obj[key] = value.toJSON()
      })
      return obj
    }

    return this.data
  }
}
