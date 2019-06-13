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
import { StringNode } from './ScalarNode'

export type IObjectNodeOptions<
  TNode extends ObjectNode<any, any, any>
> = IFieldsNodeOptions<
  TNode extends ObjectNode<any, any, infer Typename> ? Typename : string
> & {
  getKey?: KeyFn<TNode>
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
  Generic(Keyable),
  Outputable
) {
  constructor(
    fields: TNode,
    {
      getKey,
      ...options
    }: IObjectNodeOptions<ObjectNode<TNode, T, Typename>> = {}
  ) {
    // Add __typename node, not currently used.
    ;(fields as any).__typename = new FieldNode(TYPENAME_NODE)

    super([fields as any, options])

    this.getKey = defaultKey(this as any)
  }

  public getData(
    accessor: Accessor
  ): DataProxy<ObjectNode<TNode, T, Typename>> {
    super.getData(accessor)

    if (accessor.value && accessor.value!.data === null) {
      return null as any
    }

    return new Proxy({} as any, {
      get: (_, prop: keyof TNode) => {
        // Statically resolve __typename
        if (prop === '__typename') return this.name

        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]

          return field.getData(accessor as any)
        }
      },

      set: (_, prop: keyof TNode, data) => {
        if (prop === '__typename') return true

        if (this.fields.hasOwnProperty(prop)) {
          const fieldAccessor = accessor.getChild(
            a => a.selection.dataProp === prop
          )

          if (fieldAccessor) {
            fieldAccessor.setData(data)
          }
        }

        return true
      },
    })
  }
}
