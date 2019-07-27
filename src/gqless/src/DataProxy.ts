import {
  ArrayNode,
  InnerNode,
  Node,
  NodeDataType,
  FieldsNode,
  FieldNode,
  Arguments,
  NodeContainer,
  ScalarNode,
} from './Node'
import { Extension, IExtension } from './Extension'

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K
}[keyof T]

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type NodeExtensionType<
  TExtensions extends Record<string, Extension>,
  TNode extends Node<any>
> = TNode extends FieldsNode<any, any, infer Typename>
  ? TExtensions[Typename]
  : never

type NodeExtension<
  TExtensions extends Record<string, Extension>,
  TNode extends Node<any>
> = NodeExtensionType<TExtensions, TNode> extends Function
  ? ReturnType<NodeExtensionType<TExtensions, TNode>>
  : NodeExtensionType<TExtensions, TNode>

// Extracts the nullable value from a NodeContainer
type NodeContainerNullable<
  TNode extends Node<any>
> = TNode extends NodeContainer<any, infer TNullable, any>
  ? TNullable extends true
    ? null
    : never
  : never

// Gets the inner value for a NodeContainer
type NodeContainerValue<
  TNode extends NodeContainer<any, any, any>,
  TExtensions extends Record<string, Extension>
> = DataProxy<InnerNode<TNode>, TExtensions>

// Field argument function
type FieldArgFn<
  TNode extends FieldNode<any, any, any>,
  TExtensions extends Record<string, Extension>
> = TNode extends FieldNode<any, Arguments<infer T, infer TInputs>, any>
  ? 0 extends (1 & T & TInputs) // check for any (when undefined / null is passed)
    ? never
    : (RequiredKeys<NodeDataType<Arguments<T, TInputs>>> extends never
        ? (
            args?: NodeDataType<Arguments<T, TInputs>>
          ) =>
            | NodeContainerValue<TNode, TExtensions>
            | NodeContainerNullable<TNode>
        : (
            args: NodeDataType<Arguments<T, TInputs>>
          ) =>
            | NodeContainerValue<TNode, TExtensions>
            | NodeContainerNullable<TNode>)
  : never

// Returns a field + callback + nullable
type FieldProxy<
  TNode extends FieldNode<any, any, any>,
  TExtensions extends Record<string, Extension>
> = FieldArgFn<TNode, TExtensions> extends never
  ? (NodeContainerValue<TNode, TExtensions> | NodeContainerNullable<TNode>) // no args
  : (NodeContainerNullable<TNode> extends never
      ? (InnerNode<TNode> extends ScalarNode // always need to call scalar nodes
          ? FieldArgFn<TNode, TExtensions>
          : (FieldArgFn<TNode, TExtensions> &
              NodeContainerValue<TNode, TExtensions>)) // args + non-nullable = don't need to call it
      : FieldArgFn<TNode, TExtensions>) // args + nullable = need to call it

// Recurse over a FieldsNode (ObjectNode / InterfaceNode)
type RecurseFields<
  TNode extends FieldsNode<any, any, any, any>,
  TExtensions extends Record<string, Extension>
> = {
  [K in keyof NodeDataType<TNode>]: FieldProxy<
    TNode['fields'][K],
    TExtensions
  > &
    NodeExtension<TExtensions, TNode>[K]
} &
  {
    [K in keyof Omit<
      NodeExtension<TExtensions, TNode>,
      keyof NodeDataType<TNode>
    >]: NodeExtension<TExtensions, TNode>[K]
  }

// Recurse over ArrayNode + add nullable
type RecurseArray<
  TNode extends ArrayNode<any, any>,
  TExtensions extends Record<string, Extension>
> = {
  [K in keyof NodeDataType<TNode>]: K extends number
    ? (DataProxy<TNode['ofNode'], TExtensions> | NodeContainerNullable<TNode>)
    : NodeDataType<TNode>[K]
}

// Input factory type for Node
export type DataProxy<
  TNode extends Node<any>,
  TExtensions = unknown
> = TNode extends ArrayNode<any, any>
  ? RecurseArray<TNode, TExtensions>
  : TNode extends FieldsNode<any, any, any, any>
  ? RecurseFields<TNode, TExtensions>
  : NodeDataType<TNode>
