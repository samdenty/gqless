import {
  ArrayNode,
  InnerNode,
  Node,
  NodeDataType,
  FieldsNode,
  FieldNode,
  Arguments,
} from './Node'

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K
}[keyof T]

interface DataNodeCallbackOptions {
  alias?: string
}

// If the Arguments are type any, it's because undefined / null was passed
// meaning no arguments needed
type FieldCallback<
  TNode extends FieldNode<any, any, any>
> = TNode extends FieldNode<any, Arguments<infer T, infer TInputs>, any>
  ? 0 extends (1 & T & TInputs) // check for any
    ? unknown
    : (RequiredKeys<NodeDataType<Arguments<T, TInputs>>> extends never
        ? (
            args?: NodeDataType<Arguments<T, TInputs>>,
            options?: DataNodeCallbackOptions
          ) => FieldValueProxy<TNode>
        : (
            args: NodeDataType<Arguments<T, TInputs>>,
            options?: DataNodeCallbackOptions
          ) => FieldValueProxy<TNode>)
  : unknown

type FieldValueProxy<TNode extends FieldNode<any, any, any>> = DataProxy<
  InnerNode<TNode>
>

type FieldProxy<TNode extends FieldNode<any, any, any>> = FieldCallback<TNode> &
  FieldValueProxy<TNode>

type RecurseFields<TNode extends FieldsNode<any, any, any, any>> = {
  [K in keyof NodeDataType<TNode>]: FieldProxy<TNode['fields'][K]>
}

type RecurseArray<
  TNode extends ArrayNode<any, any>,
  DataType = NodeDataType<TNode>
> = {
  [K in keyof DataType]: K extends number
    ? DataProxy<TNode['ofNode']>
    : DataType[K]
}

export type DataProxy<TNode extends Node<any>> = TNode extends ArrayNode<
  any,
  any
>
  ? RecurseArray<TNode>
  : TNode extends FieldsNode<any, any, any, any>
    ? RecurseFields<TNode>
    : NodeDataType<TNode>
