import { ArgumentsField } from './ArgumentsField'
import { UScalarNode, ArrayNode, InputNode } from '../'
import { Node } from '../abstract'
import { lazyGetters } from '@gqless/utils'

export type UArguments =
  | UScalarNode
  | ArrayNode<any>
  | ArgumentsField
  | InputNode<any>

type UArgumentsRecord = Record<string, ArgumentsField>

export class Arguments<TData = any> extends Node<TData> {
  public inputs: UArgumentsRecord

  constructor(inputs: UArgumentsRecord) {
    super()

    this.inputs = lazyGetters(inputs)
  }

  public provide(value: TData) {}
}
