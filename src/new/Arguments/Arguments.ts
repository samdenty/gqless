import { ArgumentsField } from './ArgumentsField'
import { UScalarNode, ArrayNode, InputNode } from '../nodes'
import { NonNullableKeys, NullableKeys } from '../NodeContainer'
import { memoizedGetters } from '../../utils'
import { NodeDataType } from '../Node'

export type UArguments =
  | UScalarNode
  | ArrayNode<any, boolean>
  | ArgumentsField<any, boolean>
  | InputNode<any>

type UArgumentsRecord<T extends keyof any> = Record<
  T,
  ArgumentsField<UArguments, boolean>
>

type ArgumentsDataType<T extends UArgumentsRecord<keyof T>> = {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: NodeDataType<T[P]['ofNode']>
} &
  { [P in Exclude<keyof T, NullableKeys<T>>]: NodeDataType<T[P]['ofNode']> }

export class Arguments<
  T extends ArgumentsDataType<TInputs>,
  TInputs extends UArgumentsRecord<keyof T> = UArgumentsRecord<keyof T>
> {
  public inputs: TInputs

  constructor(inputs: TInputs) {
    this.inputs = memoizedGetters(inputs)
  }

  public provide(value: T) {}
}
