import {
  FieldsNode,
  IFieldsNodeOptions,
  UFieldsNodeRecord,
  Outputable,
  Keyable,
  KeyFn,
  Node,
  defaultKey,
  FieldNode,
} from './abstract'
import { DataProxy } from '../DataProxy'
import { Accessor } from '../Accessor'
import { Mix, Generic } from 'mix-classes'
import { StringNode, ScalarNode } from './ScalarNode'
import { Extension } from '../Extension'

export type IObjectNodeOptions<Typename extends string> = IFieldsNodeOptions<
  Typename
> & {
  extension?: Extension
  // getKey?: KeyFn<TNode>
}

export interface ObjectNode<
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string = string
>
  extends FieldsNode<
      TNode & { __typename: FieldNode<StringNode<Typename>> },
      T,
      Typename
    >,
    Keyable<ObjectNode<TNode, T, Typename>> {}

const TYPENAME_NODE = new StringNode()

export class ObjectNode<TNode, T, Typename> extends Mix(
  Generic(FieldsNode),
  Outputable,
  Generic(Keyable)
) {
  constructor(
    fields: TNode,
    { extension, ...options }: IObjectNodeOptions<Typename> = {}
  ) {
    // Add __typename node, not currently used.
    ;(fields as any).__typename = new FieldNode(TYPENAME_NODE)

    super([fields as any, options], [extension])

    this.keyGetter = defaultKey(this) as any
  }

  public getData(
    accessor: Accessor
  ): DataProxy<ObjectNode<TNode, T, Typename>> {
    super.getData(accessor)

    // If the value is nulled, return null
    if (accessor.value && accessor.value!.data === null) {
      return null as any
    }

    return new Proxy({} as any, {
      get: (_, prop: keyof TNode) => {
        // Statically resolve __typename
        if (prop === '__typename') return this.name

        // check fields first
        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]

          // if it's scalar, check extensions
          if (field.ofNode instanceof ScalarNode) {
            for (let i = accessor.extensions.length - 1; i >= 0; --i) {
              const extension = accessor.extensions[i]
              if (prop in extension) return extension[prop]
            }
          }

          return field.getData(accessor as any)
        }

        // fallback to extensions
        for (let i = accessor.extensions.length - 1; i >= 0; --i) {
          const extension = accessor.extensions[i]
          if (prop in extension) return extension[prop]
        }
      },

      set: (_, prop: keyof TNode, data) => {
        if (prop === '__typename') return true

        // check fields first
        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]

          // if it's scalar, check extensions
          if (field.ofNode instanceof ScalarNode) {
            for (let i = accessor.extensions.length - 1; i >= 0; --i) {
              const extension = accessor.extensions[i]
              if (prop in extension) return (extension[prop] = data)
            }
          }

          const fieldAccessor = accessor.getChild(
            a => a.selection.dataProp === prop
          )

          if (fieldAccessor) {
            fieldAccessor.setData(data)
          }
        }

        // fallback to extensions
        for (let i = accessor.extensions.length - 1; i >= 0; --i) {
          const extension = accessor.extensions[i]
          if (prop in extension) return (extension[prop] = data)
        }

        return true
      },
    })
  }
}
