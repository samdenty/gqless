import { Generic, Mix } from 'mix-classes'

import {
  defaultKey,
  FieldsNode,
  IFieldsNodeOptions,
  Keyable,
  NodeDataType,
  UFieldsNodeRecord,
} from './abstract'
import { Extension } from './Extension'
import { ObjectNode } from './ObjectNode'
import { Accessor, ACCESSOR, FieldAccessor } from '../Accessor'

export type IInterfaceNodeOptions = IFieldsNodeOptions & {
  extension?: Extension
}

export interface InterfaceNode<TImplementations extends ObjectNode<any>>
  extends FieldsNode<NodeDataType<TImplementations>>,
    Keyable<InterfaceNode<TImplementations>> {}

export class InterfaceNode<TImplementations = any> extends Mix(
  Generic(FieldsNode),
  Generic(Keyable)
) {
  constructor(
    fields: UFieldsNodeRecord,
    public implementations: TImplementations[],
    options: IInterfaceNodeOptions
  ) {
    super([fields as any, options], [options.extension])

    this.keyGetter = defaultKey(this as any)
  }

  public getData(accessor: Accessor): any {
    // @ts-ignore typescript limitation of mix-classes
    super.getData(accessor)

    // If the value is nulled, return null
    if (accessor.value && accessor.value!.data === null) {
      return null as any
    }

    return new Proxy({} as any, {
      get: (_, prop: any) => {
        if (prop === ACCESSOR) return accessor

        // If the prop exists in this interface,
        // return directly from interface
        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]

          // if (field.args) {
          //   return (args: any) => {
          //     // forEach key in args

          //     // if key in an implementation, create implementation accessor

          //     // create interface accessor
          //   }
          // }

          // console.log({ field, hasArgs })
          return field.getData(accessor as any)
        }

        // if prop only in one implementation

        // else throw an error if it doesn't satisfy conditions

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
