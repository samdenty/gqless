import { ArgumentsField } from './ArgumentsField'
import { ScalarNode, ArrayNode, InputNode } from '../'
import { Node } from '../abstract'
import { lazyGetters, invariant } from '@gqless/utils'
import { EnumNode } from '../EnumNode'
import { Variable } from '../../Variable'

export type UArguments =
  | ScalarNode
  | EnumNode
  | ArrayNode<any>
  | ArgumentsField
  | InputNode<any>

type UArgumentsRecord = Record<string, ArgumentsField>

export class Arguments<TData = any> extends Node<TData> {
  public inputs: UArgumentsRecord

  constructor(inputs: UArgumentsRecord, public required = false) {
    super()

    this.inputs = lazyGetters(inputs, (fieldName, field) => {
      // Called when the getter prop is evaluated
      field.name = fieldName as string
    })
  }
}
