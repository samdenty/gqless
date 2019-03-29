import {
  FieldsNode,
  IFieldsNodeOptions,
  FieldsDataType,
  UFieldsNodeRecord,
  FieldNode,
} from '../FieldsNode'
import { DataProxy } from '../DataProxy'
import { NodeDataType } from '../Node'
import { Selection, SelectionField } from '../selections'

export type IObjectNodeOptions<Typename> = IFieldsNodeOptions<Typename> & {}

export class ObjectNode<
  TNode extends UFieldsNodeRecord<keyof T>,
  T,
  Typename extends string
> extends FieldsNode<TNode, T, Typename> {
  public data: DataProxy<ObjectNode<TNode, T, Typename>>
  public data2: NodeDataType<ObjectNode<TNode, T, Typename>>

  constructor(fields: TNode, options?: IObjectNodeOptions<Typename>) {
    super(fields, options)
  }

  public getData(selection: Selection<any>): FieldsDataType<TNode, Typename> {
    return new Proxy<FieldsDataType<TNode, Typename>>({} as any, {
      get: (_, prop: string) => {
        if (this.fields.hasOwnProperty(prop)) {
          const field: FieldNode<any> = this.fields[prop]

          return field.getData(selection)
        }
      },
    })
  }
}
