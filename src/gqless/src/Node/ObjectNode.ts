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
import { Accessor } from '../Accessor'
import { Mix, Generic } from 'mix-classes'
import { StringNode, ScalarNode } from './ScalarNode'
import { Extension } from '../Extension'

export type IObjectNodeOptions = IFieldsNodeOptions & {
  extension?: Extension
  // getKey?: KeyFn<TNode>
}

export interface ObjectNode<TData>
  extends FieldsNode<TData>,
    Keyable<ObjectNode<TData>> {}

const TYPENAME_NODE = new StringNode()

export class ObjectNode<TData = any> extends Mix(
  Generic(FieldsNode),
  Outputable,
  Generic(Keyable)
) {
  constructor(
    fields: UFieldsNodeRecord,
    { extension, ...options }: IObjectNodeOptions = {}
  ) {
    // Add __typename node, not currently used.
    ;(fields as any).__typename = new FieldNode(TYPENAME_NODE)

    super([fields as any, options], [extension])

    this.keyGetter = defaultKey(this) as any
  }

  public getData(accessor: Accessor): TData {
    super.getData(accessor)

    // If the value is nulled, return null
    if (accessor.value && accessor.value!.data === null) {
      return null as any
    }

    return new Proxy({} as any, {
      get: (_, prop: string) => {
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

      set: (_, prop: string, data) => {
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
