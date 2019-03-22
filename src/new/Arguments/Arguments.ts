import { Query } from '../../Query'
import { ArgumentsField } from './ArgumentsField'
import { UScalarNode, ScalarNode } from '../ScalarNode'
import { ArrayNode } from '../ArrayNode'
import { InputNode } from '../InputNode'
import { NonNullableKeys, NullableKeys } from '../NodeContainer'
import { memoizedGetters } from '../../utils'

export type UArguments =
  | UScalarNode
  | ArrayNode<any>
  | ArgumentsField<any>
  | InputNode<any>

type UArgumentsRecord<T extends keyof any> = Record<
  T,
  ArgumentsField<UArguments>
>

export type UArgumentsDataType<T extends UArguments> = T extends InputNode<any>
  ? T['$$type']
  : T extends ScalarNode<infer U>
  ? U
  : T extends ArrayNode<any>
  ? T['$$type']
  : T extends Arguments<any, any>
  ? ArgumentsDataType<T['$$type']>
  : never

type ArgumentsDataType<T extends UArgumentsRecord<keyof T>> = {
  [P in Exclude<keyof T, NonNullableKeys<T>>]?: UArgumentsDataType<T[P]['node']>
} &
  { [P in Exclude<keyof T, NullableKeys<T>>]: UArgumentsDataType<T[P]['node']> }

export class Arguments<
  T extends ArgumentsDataType<TInputs>,
  TInputs extends UArgumentsRecord<keyof T> = UArgumentsRecord<keyof T>
> {
  public $$type: T
  public inputs: TInputs

  constructor(protected query: Query, inputs: TInputs) {
    this.inputs = memoizedGetters(inputs)
  }

  public provide(value: T) {}
}
