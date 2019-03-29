import { ArgumentsField } from './ArgumentsField'
import { UScalarNode, ArrayNode, InputNode } from '../nodes'
import { NonNullableKeys, NullableKeys } from '../NodeContainer'
import { lazyGetters } from '../../utils'
import { NodeDataType, Node } from '../Node'

export type UArguments =
  | UScalarNode
  | ArrayNode<any, any>
  | ArgumentsField<any, any>
  | InputNode<any, any>

type UArgumentsRecord<T extends keyof any> = Record<
  T,
  ArgumentsField<UArguments, any>
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
