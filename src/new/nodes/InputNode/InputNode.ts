import { Node, NodeDataType } from '../../Node'
import { UScalarNode } from '../ScalarNode'
import { InputNodeField } from './InputNodeField'
import { ArrayNode } from '../ArrayNode'
import { NullableKeys, NonNullableKeys } from '../../NodeContainer'
import { lazyGetters } from '../../../utils'

export type UInputNode = UScalarNode | ArrayNode<any, any> | InputNode<any, any>

type UInputNodeRecord<T extends keyof any> = Record<
  T,
  InputNodeField<UInputNode, boolean>
>

type InputNodeDataType<T extends UInputNodeRecord<any>> = {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: NodeDataType<T[P]['ofNode']>
} &
  { [P in Exclude<keyof T, NullableKeys<T>>]: NodeDataType<T[P]['ofNode']> }

export type IInputNodeOptions = {
  name?: string
}

export class InputNode<
  T,
  TInputs extends UInputNodeRecord<keyof T>
> extends Node<InputNodeDataType<TInputs>> {
  public name?: string
  public inputs: TInputs

  constructor(inputs: TInputs, { name }: IInputNodeOptions = {}) {
    super()
    this.name = name
    this.inputs = lazyGetters(inputs)
  }

  public provide(value: InputNodeDataType<TInputs>) {}
}
