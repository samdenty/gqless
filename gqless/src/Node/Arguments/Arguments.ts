import { lazyGetters } from '@gqless/utils'

import { ArrayNode, InputNode, ScalarNode } from '../'
import { EnumNode } from '../EnumNode'
import { ArgumentsField } from './ArgumentsField'

export type UArguments =
  | ScalarNode
  | EnumNode
  | ArrayNode<any>
  | ArgumentsField
  | InputNode

type UArgumentsRecord = Record<string, ArgumentsField>

export class Arguments {
  public inputs: UArgumentsRecord

  constructor(inputs: UArgumentsRecord, public required = false) {
    this.inputs = lazyGetters(inputs, (fieldName, field) => {
      // Called when the getter prop is evaluated
      field.name = fieldName as string
    })
  }
}
