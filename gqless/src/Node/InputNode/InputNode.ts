import { lazyGetters } from '@gqless/utils'

import { Node } from '../abstract'
import { ArrayNode } from '../ArrayNode'
import { EnumNode } from '../EnumNode'
import { ScalarNode } from '../ScalarNode'
import { InputNodeField } from './InputNodeField'

export type UInputNode = ScalarNode | ArrayNode<any> | InputNode<any> | EnumNode

type UInputNodeRecord = Record<string, InputNodeField>

export type IInputNodeOptions = {
  name: string
}

export class InputNode<TData> extends Node<TData> {
  public name?: string
  public inputs: UInputNodeRecord

  constructor(inputs: UInputNodeRecord, { name }: IInputNodeOptions) {
    super()
    this.name = name
    this.inputs = lazyGetters(inputs)
  }

  public toString() {
    return this.name || this.constructor.name
  }
}
