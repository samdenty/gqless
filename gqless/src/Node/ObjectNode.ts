import { Generic, Mix } from 'mix-classes'

import { Accessor, FieldAccessor } from '../Accessor'
import { ACCESSOR } from '../Accessor/Accessor'
import {
  defaultKey,
  FieldNode,
  FieldsNode,
  IFieldsNodeOptions,
  Keyable,
  Outputable,
  UFieldsNodeRecord,
  Matchable,
} from './abstract'
import { Extension } from './Extension'
import { ScalarNode } from './ScalarNode'
import { Value } from '../Cache'

export type IObjectNodeOptions = IFieldsNodeOptions & {
  extension?: Extension
}

export interface ObjectNode<TData>
  extends FieldsNode<TData>,
    Keyable<ObjectNode<TData>> {}

const TYPENAME_NODE = new ScalarNode()

export class ObjectNode<TData = any> extends Mix(
  Generic(FieldsNode),
  Outputable,
  Matchable,
  Generic(Keyable)
) {
  constructor(
    fields: UFieldsNodeRecord,
    { extension, ...options }: IObjectNodeOptions
  ) {
    // Add __typename node, not currently used.
    ;(fields as any).__typename = new FieldNode(TYPENAME_NODE)

    super([fields as any, options], [extension])

    this.keyGetter = defaultKey(this) as any
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
    super.getData(accessor)

    // If the value is nulled, return null
    if (accessor.value && accessor.value!.data === null) {
      return null as any
    }

    return new Proxy({} as any, {
      get: (_, prop: any) => {
        // Statically resolve __typename
        if (prop === ACCESSOR) return accessor
        if (prop === '__typename') return this.name

        // check fields first
        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]

          return field.getData(accessor as any)
        }

        // fallback to extensions
        for (const extension of accessor.extensions) {
          if (prop in extension) return extension[prop]
        }
      },

      set: (_, prop: string, data) => {
        if (prop === '__typename') return true

        /**
         * If setting a field, create a new accessor and set data
         */
        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]
          const selection = field.getSelection(accessor).selection

          const fieldAccessor =
            accessor.getChild(a => a.selection === selection) ||
            new FieldAccessor(accessor, selection)

          fieldAccessor.setData(data)

          return true
        }

        /**
         * else set it on the first extension with the property
         */
        for (const extension of accessor.extensions) {
          if (prop in extension) {
            extension[prop] = data
            return true
          }
        }

        return true
      },
    })
  }
}
