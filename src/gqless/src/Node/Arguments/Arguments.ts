import { invariant, lazyGetters } from '@gqless/utils'

import { ArrayNode, InputNode, ScalarNode } from '../'
import { Variable } from '../../Variable'
import { Node } from '../abstract'
import { EnumNode } from '../EnumNode'
import { ArgumentsField } from './ArgumentsField'

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
