import { Generic, Mix } from 'mix-classes'

import {
  defaultKey,
  FieldsNode,
  IFieldsNodeOptions,
  Keyable,
  NodeDataType,
  Abstract,
  UFieldsNodeRecord,
} from './abstract'
import { Extension } from './Extension'
import { ObjectNode } from './ObjectNode'
import { Accessor, ACCESSOR, FieldAccessor } from '../Accessor'

export type IInterfaceNodeOptions = IFieldsNodeOptions & {
  extension?: Extension
}

export interface InterfaceNode<TImplementation extends ObjectNode = ObjectNode>
  extends FieldsNode<NodeDataType<TImplementation>>,
    Abstract<TImplementation>,
    Keyable<InterfaceNode<TImplementation>> {}

export class InterfaceNode<TImplementation> extends Mix(
  Generic(FieldsNode),
  Generic(Abstract),
  Generic(Keyable)
) {
  constructor(
    fields: UFieldsNodeRecord,
    implementations: TImplementation[],
    options: IInterfaceNodeOptions
  ) {
    super([fields, options], [implementations, options.extension])

    this.keyGetter = defaultKey(this as any)
  }

  public getData(accessor: Accessor): any {
    // @ts-ignore typescript limitation of mix-classes
    const data = super.getData(accessor)
    if (!data) return data

    return new Proxy(data, {
      get: (_, prop: any) => {
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

          return field.getData(accessor as any)
        }

        // if prop only in one implementation

        // else throw an error if it doesn't satisfy conditions

        return data[prop]
      },

      set: (_, prop: string, value) => {
        if (prop === '__typename') return true

        /**
         * If setting a field, create a new accessor and set data
         */
        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]
          const selection = field.getSelection(accessor).selection

          const fieldAccessor =
            accessor.get(a => a.selection === selection) ||
            new FieldAccessor(accessor, selection)

          fieldAccessor.setData(data)

          return true
        }

        data[prop] = value

        return true
      },
    })
  }
}
