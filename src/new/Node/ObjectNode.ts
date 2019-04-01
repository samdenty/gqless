import {
  FieldsNode,
  IFieldsNodeOptions,
  UFieldsNodeRecord,
  FieldNode,
} from './abstract'
import { DataProxy } from '../DataProxy'
import { Selection } from '../Selection'

export type IObjectNodeOptions<Typename> = IFieldsNodeOptions<Typename> & {}

export class ObjectNode<
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string
> extends FieldsNode<TNode, T, Typename> {
  // @TODO: Remove
  public data: DataProxy<ObjectNode<TNode, T, Typename>>

  constructor(fields: TNode, options?: IObjectNodeOptions<Typename>) {
    super(fields, options)
  }

  public getData(
    selection: Selection<any>
  ): DataProxy<ObjectNode<TNode, T, Typename>> {
    return new Proxy({} as any, {
      get: (_, prop: string) => {
        if (this.fields.hasOwnProperty(prop)) {
          const field: FieldNode<any> = this.fields[prop]

          return field.getData(selection)
        }
      },
    })
  }
}
