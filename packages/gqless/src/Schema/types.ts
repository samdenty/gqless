import type { ExecutionResult } from 'graphql';

export interface Type {
  __args?: Record<string, string>;
  __type: string;
}

export const SchemaUnionsKey = Symbol('unionsKey');
export interface Schema extends Record<string, Record<string, Type>> {
  query: Record<string, Type>;
  mutation: Record<string, Type>;
  subscription: Record<string, Type>;
  [SchemaUnionsKey]?: Record<string, readonly string[]>;
}

export interface Scalars {
  String: string;
  Int: number;
  Float: number;
  ID: string;
}

export type ScalarsEnumsHash = Record<string, true>;

export type QueryFetcher = (
  query: string,
  variables?: Record<string, any>
) => Promise<ExecutionResult> | ExecutionResult;

export interface ParseSchemaTypeInfo {
  pureType: string;
  isNullable: boolean;
  isArray: boolean;
  nullableItems: boolean;
}

export function parseSchemaType(type: string): ParseSchemaTypeInfo {
  let isArray = false;
  let isNullable = true;
  let pureType = type;
  let nullableItems = true;
  if (pureType.endsWith('!')) {
    isNullable = false;
    pureType = pureType.slice(0, pureType.length - 1);
  }

  if (pureType.startsWith('[')) {
    pureType = pureType.slice(1, pureType.length - 1);
    isArray = true;
    if (pureType.endsWith('!')) {
      nullableItems = false;
      pureType = pureType.slice(0, pureType.length - 1);
    }
  }

  return {
    pureType,
    isNullable,
    isArray,
    nullableItems,
  };
}

export type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
  ? _DeepPartialArray<U>
  : T extends object
  ? _DeepPartialObject<T>
  : T | undefined;

interface _DeepPartialArray<T> extends Array<DeepPartial<T>> {}
type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };
