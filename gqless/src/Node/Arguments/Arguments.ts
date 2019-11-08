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
  public _inputs: UArgumentsRecord

  constructor(inputs: UArgumentsRecord, public _required = false) {
    this._inputs = lazyGetters(inputs, (fieldName, field) => {
      // Called when the getter prop is evaluated
      field._name = fieldName as string
    })
  }
}
