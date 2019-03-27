import {
  FieldsNode,
  IFieldsNodeOptions,
  FieldsNodeDataType,
  UFieldsNodeRecord,
  FieldNode,
} from '../FieldsNode'

export type IObjectNodeOptions<Typename> = IFieldsNodeOptions<Typename> & {}

export class ObjectNode<
  TData extends FieldsNodeDataType<TNode, Typename>,
  TNode extends UFieldsNodeRecord<TData> = UFieldsNodeRecord<TData>,
  Typename extends string = string
> extends FieldsNode<TData, TNode, Typename> {
  public data: TData

  constructor(fields: TNode, options?: IObjectNodeOptions<Typename>) {
    super(fields, options)
  }

  public getData(path: string[]): TData {
    return new Proxy<TData>({} as any, {
      get: (_, prop: string) => {
        if (this.fields.hasOwnProperty(prop)) {
          const field: FieldNode<any> = this.fields[prop]

          return field.getData([...path, prop])
        }
      },
    })
  }
}
