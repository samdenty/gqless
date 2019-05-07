import {
  FieldsNode,
  IFieldsNodeOptions,
  UFieldsNodeRecord,
  FieldNode,
} from './abstract'
import { DataProxy } from '../DataProxy'
import { Accessor } from '../Accessor'

export type IObjectNodeOptions<Typename> = IFieldsNodeOptions<Typename> & {
  getKey?(a: any): any
}

export class ObjectNode<
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string = string
> extends FieldsNode<TNode, T, Typename> {
  // @TODO: Remove
  public data: DataProxy<ObjectNode<TNode, T, Typename>>
  private getKey: any

  constructor(
    fields: TNode,
    { getKey, ...options }: IObjectNodeOptions<Typename> = {}
  ) {
    super(fields, options)
    this.getKey = getKey
  }

  public getData(
    accessor: Accessor
  ): DataProxy<ObjectNode<TNode, T, Typename>> {
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
