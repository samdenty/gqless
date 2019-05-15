import {
  ArrayNode,
  InnerNode,
  Node,
  NodeDataType,
  FieldsNode,
  FieldNode,
  Arguments,
  NodeContainer,
} from './Node'

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K
}[keyof T]

// Extracts the nullable value from a NodeContainer
type NodeContainerNullable<
  TNode extends Node<any>
> = TNode extends NodeContainer<any, infer TNullable, any>
  ? TNullable extends true ? null : never
  : never

// Gets the inner value for a NodeContainer
type NodeContainerValue<TNode extends NodeContainer<any, any, any>> = DataProxy<
  InnerNode<TNode>
>

// Field argument function
type FieldArgFn<
  TNode extends FieldNode<any, any, any>
> = TNode extends FieldNode<any, Arguments<infer T, infer TInputs>, any>
  ? 0 extends (1 & T & TInputs) // check for any (when undefined / null is passed)
    ? never
    : (RequiredKeys<NodeDataType<Arguments<T, TInputs>>> extends never
        ? (
            args?: NodeDataType<Arguments<T, TInputs>>
          ) => NodeContainerValue<TNode> | NodeContainerNullable<TNode>
        : (
            args: NodeDataType<Arguments<T, TInputs>>
          ) => NodeContainerValue<TNode> | NodeContainerNullable<TNode>)
  : never

// Returns a field + callback + nullable
type FieldProxy<TNode extends FieldNode<any, any, any>> = FieldArgFn<
  TNode
> extends never
  ? (NodeContainerValue<TNode> | NodeContainerNullable<TNode>)
  : (FieldArgFn<TNode> & NodeContainerValue<TNode>)

// Recurse over a FieldsNode (ObjectNode / InterfaceNode)
type RecurseFields<TNode extends FieldsNode<any, any, any, any>> = {
  [K in keyof NodeDataType<TNode>]: FieldProxy<TNode['fields'][K]>
}

// Recurse over ArrayNode + add nullable
type RecurseArray<
  TNode extends ArrayNode<any, any>,
  DataType = NodeDataType<TNode>
> = {
  [K in keyof DataType]: K extends number
    ? (DataProxy<TNode['ofNode']> | NodeContainerNullable<TNode>)
    : DataType[K]
}

// Input factory type for Node
export type DataProxy<TNode extends Node<any>> = TNode extends ArrayNode<
  any,
  any
>
  ? RecurseArray<TNode>
  : TNode extends FieldsNode<any, any, any, any>
    ? RecurseFields<TNode>
    : NodeDataType<TNode>
