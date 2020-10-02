import { invariant } from '@gqless/utils'
import { Schema } from './Schema'

type EvaluateType<T> = T extends Function
  ? T
  : 0 extends 1 & T
  ? T
  : T extends infer U
  ? {
      readonly [K in keyof U]: EvaluateType<U[K]>;
    }
  : never;

type TrimWhiteSpace<Str extends string> = string extends Str
  ? 'Error'
  : Str extends ` ${infer Str}` | `\n${infer Str}` | `${infer Str} `
  ? TrimWhiteSpace<Str>
  : Str

type ParseArgs<
  S extends string
> = S extends `${infer Name}: ${infer Value},${infer Rest}`
  ? Record<TrimWhiteSpace<Name>, TrimWhiteSpace<Value>> & ParseArgs<Rest>
  : S extends `${infer Name}: ${infer Value}`
  ? Record<TrimWhiteSpace<Name>, TrimWhiteSpace<Value>>
  : unknown

type ParseField<
  S extends string
> = S extends `${infer Field}(${infer Args}):${infer Value}\n${infer Rest}`
  ? {
      [k in TrimWhiteSpace<Field>]: [TrimWhiteSpace<Value>, ParseArgs<Args>]
    } &
      ParseField<Rest>
  : S extends `${infer Field}:${infer Value}\n${infer Rest}`
  ? Record<TrimWhiteSpace<Field>, TrimWhiteSpace<Value>> & ParseField<Rest>
  : unknown

type GetRestSchema<Rest extends string> = TrimWhiteSpace<
  Rest
> extends `${infer Content}}${infer RRest}`
  ? RRest
  : Rest

type ParseRestType<Rest extends string> = TrimWhiteSpace<
  Rest
> extends `${infer Content}}${infer RRest}`
  ? ParseField<Content>
  : string

type ParseSchema<S extends string> = string extends S
  ? 'Error'
  : TrimWhiteSpace<S> extends `type ${infer TypeName} {${infer Rest}`
  ? {
      [k in TrimWhiteSpace<TypeName>]: ParseRestType<Rest>
    } &
      ParseSchema<GetRestSchema<Rest>>
  : unknown

export function createSchema<T extends Schema | string>(
  schema: T
): T extends string ? EvaluateType<ParseSchema<T>> : T {
  invariant(typeof schema !== 'string')

  return schema as any
}
