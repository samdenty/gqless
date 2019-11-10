import { Generic, Mix, getMixin } from 'mix-classes'

import {
  FieldsNode,
  IFieldsNodeOptions,
  Abstract,
  UFieldsNodeRecord,
} from './abstract'
import {
  NodeExtension,
  StaticExtension,
  ComputableExtension,
  createExtension,
} from './Extension'
import { ObjectNode } from './ObjectNode'
import { FieldAccessor } from '../Accessor'
import { DataTrait, DataContext } from './traits'

export type IInterfaceNodeOptions = IFieldsNodeOptions & {
  extension?: NodeExtension
}

export interface InterfaceNode<TImplementation extends ObjectNode = ObjectNode>
  extends Abstract<TImplementation> {}

export class InterfaceNode<TImplementation>
  extends Mix(FieldsNode, Generic(Abstract))
  implements DataTrait {
  public extension$?: StaticExtension | ComputableExtension

  constructor(
    fields: UFieldsNodeRecord,
    implementations: TImplementation[],
    options: IInterfaceNodeOptions
  ) {
    super([fields, options], [implementations])

    if (options.extension) {
      this.extension$ = createExtension(this, options.extension)
    }
  }

  public getData(ctx: DataContext): any {
    // @ts-ignore typescript limitation of mix-classes
    const data = super.getData(ctx)
    if (!data) return data

    return new Proxy(data, {
      get: (_, prop: any) => {
        const fragment = ctx.accessor$?.fragmentToResolve$
        if (fragment) return fragment.data$?.[prop]

        // If the prop exists in this interface,
        // return directly from interface
        if (this.fields$.hasOwnProperty(prop)) {
          const field = this.fields$[prop]

          // if (field.args) {
          //   return (args: any) => {
          //     // forEach key in args

          //     // if key in an implementation, create implementation accessor

          //     // create interface accessor
          //   }
          // }

          return field.getData(ctx as any)
        }

        // if prop only in one implementation

        // else throw an error if it doesn't satisfy conditions

        return data[prop]
      },

      set: (_, prop: string, value) => {
        const fragment = ctx.accessor$?.fragmentToResolve$
        if (fragment) {
          const { data$: data } = fragment
          if (data) data[prop] = value
          return true
        }

        if (prop === '__typename') return true

        /**
         * If setting a field, create a new accessor and set data
         */
        if (this.fields$.hasOwnProperty(prop)) {
          if (!ctx.accessor$) return true

          const field = this.fields$[prop]
          const selection = field.getSelection$(ctx)

          const fieldAccessor =
            ctx.accessor$.get$(selection) ||
            new FieldAccessor(ctx.accessor$, selection)

          fieldAccessor.setData$(data)

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
