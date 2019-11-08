import { Mix } from 'mix-classes'
import { FieldAccessor } from '../Accessor'
import { ACCESSOR } from '../Accessor/Accessor'
import {
  FieldNode,
  FieldsNode,
  IFieldsNodeOptions,
  UFieldsNodeRecord,
  Matchable,
} from './abstract'
import { ScalarNode } from './ScalarNode'
import { Value } from '../Cache'
import { ComputableExtension, StaticExtension, createExtension } from './Extension'
import { DataTrait, DataContext, getValue, getExtensions } from './traits'

export type IObjectNodeOptions = IFieldsNodeOptions

const TYPENAME_NODE = new ScalarNode()

export class ObjectNode extends Mix(
  FieldsNode,
  Matchable
) implements DataTrait {
  public _extension?: ComputableExtension | StaticExtension

  constructor(fields: UFieldsNodeRecord, options: IObjectNodeOptions) {
    fields.__typename = new FieldNode(TYPENAME_NODE)
    super([fields as any, options])

    if (options.extension) {
      this._extension = createExtension(this, options.extension)
    }
  }

  public _match(value: Value, data: any) {
    const result = super._match(value, data)
    if (result !== undefined) return result

    let matches = 0

    for (const key of Object.keys(data)) {
      if (!this._fields.hasOwnProperty(key)) continue
      const field = this._fields[key]
      if (!(field._ofNode instanceof Matchable)) continue

      const keyValue = value.get(key)
      const keyData = data[key]

      if (!keyValue) continue

      const isMatch = field._ofNode._match(keyValue, keyData)
      if (!isMatch) return
      matches++
    }

    return matches ? value : undefined
  }

  public getData(ctx: DataContext): any {
    const value = getValue(ctx)

    if (value?.data === null) return null

    return new Proxy({} as any, {
      get: (_, prop: any) => {
        const fragment = ctx.accessor?._fragmentToResolve
        if (fragment) return fragment.data?.[prop]

        if (prop === ACCESSOR) return ctx.accessor
        // Statically resolve __typename
        if (prop === '__typename') return this._name

        // check fields first
        if (this._fields.hasOwnProperty(prop)) {
          const field = this._fields[prop]

          return field.getData(ctx as any)
        }

        if (prop === 'toString') return () => this.toString()

        // fallback to extensions

        for (const extension of getExtensions(ctx)) {
          if (prop in extension._data) return extension._data[prop]
        }
      },

      set: (_, prop: string, value) => {
        const fragment = ctx.accessor?._fragmentToResolve
        if (fragment) {
          const { data } = fragment
          if (data) data[prop] = value
          return true
        }

        if (prop === '__typename') return true

        /**
         * If setting a field, create a new accessor and set data
         */
        if (this._fields.hasOwnProperty(prop)) {
          if (!ctx.accessor) return true

          const field = this._fields[prop]
          const selection = field._getSelection(ctx)

          const fieldAccessor =
            ctx.accessor.get(selection) || new FieldAccessor(ctx.accessor, selection)

          fieldAccessor.setData(value)

          return true
        }

        /**
         * else set it on the first extension with the property
         */
        for (const extension of getExtensions(ctx)) {
          if (prop in extension._data) {
            extension._data[prop] = value
            return true
          }
        }

        return true
      },
    })
  }
}
