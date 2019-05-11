import {
  FieldsNode,
  IFieldsNodeOptions,
  UFieldsNodeRecord,
  FieldNode,
  Outputable,
} from './abstract'
import { DataProxy } from '../DataProxy'
import { Accessor } from '../Accessor'
import { Mix, Generic } from 'mix-classes'

export type IObjectNodeOptions<Typename> = IFieldsNodeOptions<Typename> & {
  getKey?(a: any): any
}

export interface ObjectNode<
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string
> extends FieldsNode<TNode, T, Typename> {}

export class ObjectNode<
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string = string
> extends Mix(Generic(FieldsNode), Outputable) {
  // @TODO: Remove
  public data: DataProxy<ObjectNode<TNode, T, Typename>>
  private getKey: any

  constructor(
    fields: TNode,
    { getKey, ...options }: IObjectNodeOptions<Typename> = {}
  ) {
    super([fields as any, options])
    this.getKey = getKey
  }

  public getData(
    accessor: Accessor
  ): DataProxy<ObjectNode<TNode, T, Typename>> {
    super.getData(accessor)
    // accessor.node.root.dataAccessed(accessor.node)

    return new Proxy({} as any, {
      get: (_, prop: string) => {
        if (prop === '__typename') {
          return this.name
        }

        if (this.fields.hasOwnProperty(prop)) {
          const field: FieldNode<any> = this.fields[prop]

          return field.getData(accessor)
        }
      },
    })
  }
}
