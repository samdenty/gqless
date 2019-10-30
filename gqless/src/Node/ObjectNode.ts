import { Generic, Mix } from 'mix-classes'
import { createMemo } from '@gqless/utils'
import { Accessor, FieldAccessor } from '../Accessor'
import { ACCESSOR } from '../Accessor/Accessor'
import {
  FieldNode,
  FieldsNode,
  IFieldsNodeOptions,
  UFieldsNodeRecord,
  Matchable,
  Outputable,
  getOutputableData,
} from './abstract'
import { ScalarNode } from './ScalarNode'
import { Value } from '../Cache'
import { FieldSelection } from '../Selection'

export type IObjectNodeOptions = IFieldsNodeOptions

export interface ObjectNode<TData> extends FieldsNode<TData> {}

const TYPENAME_NODE = new ScalarNode()

export class ObjectNode<TData = any> extends Mix(
  Generic(FieldsNode),
  Outputable,
  Matchable
) {
  constructor(fields: UFieldsNodeRecord, options: IObjectNodeOptions) {
    fields.__typename = new FieldNode(TYPENAME_NODE)
    super([fields as any, options], [options.extension])
  }

  public match(value: Value, data: any) {
    const result = super.match(value, data)
    if (result !== undefined) return result

    let matches = 0

    for (const key of Object.keys(data)) {
      if (!this.fields.hasOwnProperty(key)) continue
      const field = this.fields[key]
      if (!(field.ofNode instanceof Matchable)) continue

      const keyValue = value.get(key)
      const keyData = data[key]

      if (!keyValue) continue

      const isMatch = field.ofNode.match(keyValue, keyData)
      if (!isMatch) return
      matches++
    }

    return matches ? value : undefined
  }

  public getData(accessor: Accessor): TData {
    // @ts-ignore typescript limitation for mix-classes
    super.getData(accessor)

    // If the value is nulled, return null
    if (accessor.value && accessor.value!.data === null) {
      return null as any
    }

    return new Proxy({} as any, {
      get: (_, prop: any) => {
        if (accessor.fragmentToResolve) {
          const { data } = accessor.fragmentToResolve
          return data ? data[prop] : undefined
        }

        if (prop === ACCESSOR) return accessor
        // Statically resolve __typename
        if (prop === '__typename') return this.name

        // check fields first
        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]

          return getOutputableData(field, accessor)
        }

        if (prop === 'toString') return () => this.toString()

        // fallback to extensions
        for (const extension of accessor.extensions) {
          if (prop in extension.data) return extension.data[prop]
        }
      },

      set: (_, prop: string, value) => {
        if (accessor.fragmentToResolve) {
          const { data } = accessor.fragmentToResolve
          if (data) data[prop] = value
          return true
        }

        if (prop === '__typename') return true

        /**
         * If setting a field, create a new accessor and set data
         */
        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]
          const selection = field.getSelection(accessor)

          const fieldAccessor =
            accessor.get(selection) || new FieldAccessor(accessor, selection)

          fieldAccessor.setData(value)

          return true
        }

        /**
         * else set it on the first extension with the property
         */
        for (const extension of accessor.extensions) {
          if (prop in extension.data) {
            extension.data[prop] = value
            return true
          }
        }

        return true
      },
    })
  }
}
