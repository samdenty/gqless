import { Generic, Mix, getMixin } from 'mix-classes'

import {
  FieldsNode,
  IFieldsNodeOptions,
  NodeDataType,
  Abstract,
  UFieldsNodeRecord,
  getOutputableData,
  IDataContext,
} from './abstract'
import { NodeExtension } from './Extension'
import { ObjectNode } from './ObjectNode'
import { Accessor, FieldAccessor, getAccessorData } from '../Accessor'

export type IInterfaceNodeOptions = IFieldsNodeOptions & {
  extension?: NodeExtension
}

export interface InterfaceNode<TImplementation extends ObjectNode = ObjectNode>
  extends FieldsNode<NodeDataType<TImplementation>>,
    Abstract<TImplementation> {}

export class InterfaceNode<TImplementation> extends Mix(
  Generic(FieldsNode),
  Generic(Abstract)
) {
  constructor(
    fields: UFieldsNodeRecord,
    implementations: TImplementation[],
    options: IInterfaceNodeOptions
  ) {
    super([fields, options], [implementations, options.extension])
  }

  public getData(ctx: IDataContext): any {
    // @ts-ignore typescript limitation of mix-classes
    const data = super.getData(ctx)
    if (!data) return data

    return new Proxy(data, {
      get: (_, prop: any) => {
        // if (accessor.fragmentToResolve) {
        //   const { data } = accessor.fragmentToResolve
        //   return data ? data[prop] : undefined
        // }

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

          return getOutputableData(field, ctx)
        }

        // if prop only in one implementation

        // else throw an error if it doesn't satisfy conditions

        return data[prop]
      },

      set: (_, prop: string, value) => {
        // if (accessor.fragmentToResolve) {
        //   const { data } = accessor.fragmentToResolve
        //   if (data) data[prop] = value
        //   return true
        // }

        if (prop === '__typename') return true

        /**
         * If setting a field, create a new accessor and set data
         */
        if (this.fields.hasOwnProperty(prop)) {
          if (!ctx.accessor) return true

          const field = this.fields[prop]
          const selection = field.getSelection(ctx)

          const fieldAccessor =
            ctx.accessor.get(selection) ||
            new FieldAccessor(ctx.accessor, selection)

          fieldAccessor.setData(data)

          return true
        }

        data[prop] = value

        return true
      },
    })
  }

  public toString() {
    return getMixin(this, FieldsNode)!.toString()
  }
}
