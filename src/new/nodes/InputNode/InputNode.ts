import { Node, NodeDataType } from '../../Node'
import { UScalarNode } from '../ScalarNode'
import { InputNodeField } from './InputNodeField'
import { ArrayNode } from '../ArrayNode'
import { NullableKeys, NonNullableKeys } from '../../NodeContainer'
import { memoizedGetters } from '../../../utils'

export type UInputNode =
  | UScalarNode
  | ArrayNode<any, boolean>
  | InputNode<any, any>

type UInputNodeRecord<T extends keyof any> = Record<
  T,
  InputNodeField<UInputNode, boolean>
>

type InputNodeDataType<T extends UInputNodeRecord<keyof T>> = {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: NodeDataType<T[P]['ofNode']>
} &
  { [P in Exclude<keyof T, NullableKeys<T>>]: NodeDataType<T[P]['ofNode']> }

export type IInputNodeOptions = {
  name?: string
}

export class InputNode<
  T extends InputNodeDataType<TInputs>,
  TInputs extends UInputNodeRecord<keyof T> = UInputNodeRecord<keyof T>
> extends Node<T> {
  public name?: string
  public inputs: TInputs

  constructor(inputs: TInputs, { name }: IInputNodeOptions = {}) {
    super()
    this.name = name
    this.inputs = memoizedGetters(inputs)
  }

  a: T
  public provide(value: T) {}
}
