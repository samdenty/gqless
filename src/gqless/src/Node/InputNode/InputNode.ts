import { UScalarNode } from '../ScalarNode'
import { InputNodeField } from './InputNodeField'
import { ArrayNode } from '../ArrayNode'
import { Node } from '../abstract'
import { lazyGetters } from '@gqless/utils'

export type UInputNode = UScalarNode | ArrayNode<any> | InputNode<any>

type UInputNodeRecord = Record<string, InputNodeField>

export type IInputNodeOptions = {
  name?: string
}

export class InputNode<TData> extends Node<TData> {
  public name?: string
  public inputs: UInputNodeRecord

  constructor(inputs: UInputNodeRecord, { name }: IInputNodeOptions = {}) {
    super()
    this.name = name
    this.inputs = lazyGetters(inputs)
  }

  public provide(value: TData) {}
}
