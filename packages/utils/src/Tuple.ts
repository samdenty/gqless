type OmitNever<T> = Pick<
  T,
  { [K in keyof T]: T[K] extends never ? never : K }[keyof T]
>

type E<T, V, N> = V extends T ? V : N
// prettier-ignore
export type LastTupleIndex<T extends Tuple, K = keyof T> = E<K, 15,E<K, 13,E<K, 12,E<K, 11, E<K, 10, E<K, 9, E<K, 8, E<K, 7, E<K, 6, E<K, 5, E<K, 4, E<K, 3, E<K, 2, E<K, 1, E<K, 0, never>>>>>>>>>>>>>>>
export type LastTupleValue<T extends Tuple> = T[LastTupleIndex<T>]

export type LastTupleValueForKey<
  TExtensions extends Tuple,
  Key extends keyof any
> = TExtensions extends { 15: Record<Key, infer U> }
  ? U
  : TExtensions extends { 14: Record<Key, infer U> }
  ? U
  : TExtensions extends { 13: Record<Key, infer U> }
  ? U
  : TExtensions extends { 12: Record<Key, infer U> }
  ? U
  : TExtensions extends { 11: Record<Key, infer U> }
  ? U
  : TExtensions extends { 10: Record<Key, infer U> }
  ? U
  : TExtensions extends { 9: Record<Key, infer U> }
  ? U
  : TExtensions extends { 8: Record<Key, infer U> }
  ? U
  : TExtensions extends { 7: Record<Key, infer U> }
  ? U
  : TExtensions extends { 6: Record<Key, infer U> }
  ? U
  : TExtensions extends { 5: Record<Key, infer U> }
  ? U
  : TExtensions extends { 4: Record<Key, infer U> }
  ? U
  : TExtensions extends { 3: Record<Key, infer U> }
  ? U
  : TExtensions extends { 2: Record<Key, infer U> }
  ? U
  : TExtensions extends { 1: Record<Key, infer U> }
  ? U
  : TExtensions extends { 0: Record<Key, infer U> }
  ? U
  : never

// prettier-ignore
type Next<T extends number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62][T];
// prettier-ignore
type Prev<T extends number> = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62][T];

type ShiftTuple<T extends Tuple> = keyof T extends never
  ? {}
  : {
      [K in Next<Extract<keyof T, number>>]: K extends number
        ? T[Prev<K>]
        : T[K]
    }

export type PushTuple<T extends Tuple, V> = T &
  Record<LastTupleIndex<T> extends never ? 0 : Next<LastTupleIndex<T>>, V>

export type UnshiftTuple<T extends Tuple, V> = Record<0, V> & ShiftTuple<T>

export type Tuple<T = any> = { [K: number]: T }

export type TupleKeys<T extends Tuple> = {
  [K in Extract<keyof T, number>]: keyof T[K]
}[Extract<keyof T, number>]

export type MapTupleByKey<
  T extends Tuple,
  Key extends TupleKeys<T>
> = OmitNever<
  { [K in keyof T]: T[K] extends { [K in Key]: any } ? T[K][Key] : never }
>
