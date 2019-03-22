import { Node } from '../Node'
import { Query } from '../../Query'
import { UScalarNode, ScalarNode } from '../ScalarNode'
import { InputNodeField } from './InputNodeField'
import { ArrayNode } from '../ArrayNode'
import { NullableKeys, NonNullableKeys } from '../NodeContainer'
import { memoizedGetters } from '../../utils'

export type UInputNode =
  | UScalarNode
  | ArrayNode<any, boolean>
  | InputNode<any, any>

type UInputNodeRecord<T extends keyof any> = Record<
  T,
  InputNodeField<UInputNode, boolean>
>

export type UInputNodeDataType<T extends Node<any>> = T extends ScalarNode<
  infer U
>
  ? U
  : T extends ArrayNode<any, boolean>
  ? T['$$dataType']
  : T extends InputNode<any, any>
  ? InputNodeDataType<T['$$dataType']>
  : never

type InputNodeDataType<T extends UInputNodeRecord<keyof T>> = {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: UInputNodeDataType<T[P]['node']>
} &
  { [P in Exclude<keyof T, NullableKeys<T>>]: UInputNodeDataType<T[P]['node']> }

export type IInputNodeOptions = {
  name?: string
}

export class InputNode<
  T extends InputNodeDataType<TInputs>,
  TInputs extends UInputNodeRecord<keyof T> = UInputNodeRecord<keyof T>
> extends Node<T> {
  // public $$dataType: T

  public name?: string
  public inputs: TInputs

  constructor(query: Query, inputs: TInputs, { name }: IInputNodeOptions = {}) {
    super(query)
    this.name = name
    this.inputs = memoizedGetters(inputs)
  }

  a: T
  public provide(value: T) {}
}
