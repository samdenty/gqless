import { ArgumentsField } from './ArgumentsField'
import { UScalarNode, ArrayNode, InputNode } from '../'
import { NodeDataType, Node, NonNullableKeys, NullableKeys } from '../abstract'
import { lazyGetters } from '@gqless/utils'

export type UArguments =
  | UScalarNode
  | ArrayNode<any, any>
  | ArgumentsField<any, any>
  | InputNode<any, any>

type UArgumentsRecord<T extends keyof any> = Record<
  T,
  ArgumentsField<UArguments>
>

type ArgumentsDataType<T extends UArgumentsRecord<keyof T>> = {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: NodeDataType<T[P]['ofNode']>
} &
  { [P in Exclude<keyof T, NullableKeys<T>>]: NodeDataType<T[P]['ofNode']> }

export class Arguments<
  T,
  TInputs extends UArgumentsRecord<keyof T>
> extends Node<ArgumentsDataType<TInputs>> {
  public inputs: TInputs

  constructor(inputs: TInputs) {
    super()

    this.inputs = lazyGetters(inputs)
  }

  public provide(value: ArgumentsDataType<TInputs>) {}
}
