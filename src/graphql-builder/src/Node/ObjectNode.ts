import {
  FieldsNode,
  IFieldsNodeOptions,
  UFieldsNodeRecord,
  Outputable,
  Keyable,
  KeyFn,
  Node,
  defaultKey,
} from './abstract'
import { DataProxy } from '../DataProxy'
import { Accessor } from '../Accessor'
import { Mix, Generic } from 'mix-classes'

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
  extends FieldsNode<TNode, T, Typename>,
    Keyable<ObjectNode<TNode, T, Typename>> {}

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
    super([fields as any, options])

    this.getKey = defaultKey(this as any)
  }

  public getData(
    accessor: Accessor
  ): DataProxy<ObjectNode<TNode, T, Typename>> {
    super.getData(accessor)
    // accessor.node.root.dataAccessed(accessor.node)

    return new Proxy({} as any, {
      get: (_, prop: keyof TNode) => {
        if (prop === '__typename') {
          return this.name
        }

        if (this.fields.hasOwnProperty(prop)) {
          const field = this.fields[prop]

          return field.getData(accessor)
        }
      },
    })
  }
}
