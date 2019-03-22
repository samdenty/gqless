import { Node } from '../Node'
import { Query } from '../../Query'
import { UScalarNode, ScalarNode } from '../ScalarNode'
import { InputNodeField } from './InputNodeField'
import { ArrayNode } from '../ArrayNode'
import { NullableKeys, NonNullableKeys } from '../NodeContainer'
import { memoizedGetters } from '../../utils'

export type UInputNode = UScalarNode | ArrayNode<any> | InputNode<any, any>

type UInputNodeRecord<T extends keyof any> = Record<
  T,
  InputNodeField<UInputNode>
>

export type UInputNodeDataType<T extends Node> = T extends ScalarNode<infer U>
  ? U
  : T extends ArrayNode<any>
  ? T['$$type']
  : T extends InputNode<any, any>
  ? InputNodeDataType<T['$$type']>
  : never

type InputNodeDataType<T extends UInputNodeRecord<keyof T>> = {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: UInputNodeDataType<T[P]['node']>
} &
  { [P in Exclude<keyof T, NullableKeys<T>>]: UInputNodeDataType<T[P]['node']> }

export class InputNode<
  T extends InputNodeDataType<TInputs>,
  TInputs extends UInputNodeRecord<keyof T> = UInputNodeRecord<keyof T>
> extends Node {
  public $$type: T
  public inputs: TInputs

  constructor(query: Query, inputs: TInputs) {
    super(query)
    this.inputs = memoizedGetters(inputs)
  }

  a: T
  public provide(value: T) {}
}
