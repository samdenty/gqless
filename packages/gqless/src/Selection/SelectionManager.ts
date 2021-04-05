import { serializeVariables } from '../Utils/cachedJSON';
import {
  Selection,
  SelectionConstructorArgs,
  SelectionType,
} from './selection';

export function separateSelectionTypes(
  selections: Selection[] | Set<Selection>
) {
  let querySelections: Selection[] | undefined;
  let mutationSelections: Selection[] | undefined;
  let subscriptionSelections: Selection[] | undefined;

  for (const selection of selections) {
    switch (selection.type) {
      case SelectionType.Query: {
        querySelections ||= [];
        querySelections.push(selection);
        break;
      }
      case SelectionType.Mutation: {
        mutationSelections ||= [];
        mutationSelections.push(selection);
        break;
      }
      case SelectionType.Subscription: {
        subscriptionSelections ||= [];
        subscriptionSelections.push(selection);
        break;
      }
    }
  }

  return {
    querySelections,
    mutationSelections,
    subscriptionSelections,
  };
}

export interface GetSelection {
  ({
    key,
    prevSelection,
    args,
    argTypes,
    type,
    unions,
  }: Pick<
    SelectionConstructorArgs,
    'key' | 'prevSelection' | 'args' | 'argTypes' | 'type' | 'unions'
  >): Selection;
}

export interface SelectionManager {
  getSelection: GetSelection;
  restore(backup: unknown): void;
  backup(): SelectionsBackup;
}

export type AliasBackupTuple = [aliasKey: string, alias: string];
export type VariableHashTuple = [
  serializedVariables: string,
  incVariablesStringId: number
];
export type AliasIncTuple = [key: string | number, incId: number];
const selectionsBackupVersion = 'v0';

function isSelectionsBackup(
  selectionsBackup?: unknown
): selectionsBackup is SelectionsBackup {
  return (
    Array.isArray(selectionsBackup) &&
    Array.isArray(selectionsBackup[0]) &&
    Array.isArray(selectionsBackup[1]) &&
    Array.isArray(selectionsBackup[2]) &&
    selectionsBackup[3] === selectionsBackupVersion
  );
}

export type SelectionsBackup = [
  AliasBackupTuple[],
  VariableHashTuple[],
  AliasIncTuple[],
  string
];

let uniqueSelectionId = 0;

export function createSelectionManager(): SelectionManager {
  const selectionCache = new Map<
    /**
     * cacheKey
     */
    string,
    Selection
  >();

  const incIds: Record<
    /**
     * key
     */
    string | number,
    /**
     * incId
     */
    number
  > = {};
  const aliasMap = new Map<
    /**
     * aliasKey
     */
    string,
    /**
     * alias
     */
    string
  >();

  let incHashId = -1;
  const stringsHash: Record<string, number> = {};

  let restoredBackup: SelectionsBackup | undefined;

  function getSerializedVariablesId(variables: Record<string, unknown>) {
    const serializedVariables = serializeVariables(variables);

    let hashId: number;

    if ((hashId = stringsHash[serializedVariables]) === undefined) {
      hashId = stringsHash[serializedVariables] = ++incHashId;

      if (restoredBackup) restoredBackup[1].push([serializedVariables, hashId]);
    }

    return hashId;
  }

  function getKeyHashId(key: string) {
    let hashId: number;
    if ((hashId = stringsHash[key]) === undefined) {
      hashId = stringsHash[key] = ++incHashId;

      if (restoredBackup) restoredBackup[1].push([key, hashId]);
    }

    return hashId;
  }

  function restore(backup: unknown) {
    if (!isSelectionsBackup(backup)) return;

    restoredBackup = backup;

    for (const [aliasKey, alias] of backup[0]) {
      aliasMap.set(aliasKey, alias);
    }

    for (const [stringKey, incHashIdValue] of backup[1]) {
      stringsHash[stringKey] = incHashIdValue;
      incHashId = incHashIdValue;
    }

    for (const [key, incId] of backup[2]) {
      incIds[key] = incId;
    }
  }

  function backup(): SelectionsBackup {
    if (restoredBackup) {
      restoredBackup[2] = [];
      for (const key in incIds) restoredBackup[2].push([~~key, incIds[key]]);

      return restoredBackup;
    }

    const backup: SelectionsBackup = [[], [], [], selectionsBackupVersion];
    for (const [aliasKey, alias] of aliasMap.entries()) {
      backup[0].push([aliasKey, alias]);
    }
    for (const serializedVariables in stringsHash) {
      backup[1].push([serializedVariables, stringsHash[serializedVariables]]);
    }
    for (const key in incIds) backup[2].push([~~key, incIds[key]]);

    return (restoredBackup = backup);
  }

  function getVariableAlias(
    key: string | number,
    variables: Record<string, unknown>,
    variableTypes: Record<string, string>
  ) {
    const hashedKey = typeof key === 'string' ? getKeyHashId(key) : key;
    const aliasKey = `${hashedKey}-${getSerializedVariablesId(
      variables
    )}-${getSerializedVariablesId(variableTypes)}`;
    let alias = aliasMap.get(aliasKey);

    if (alias == null) {
      incIds[hashedKey] ??= -1;
      alias = `${key}${++incIds[hashedKey]}`;
      aliasMap.set(aliasKey, alias);

      if (restoredBackup) restoredBackup[0].push([aliasKey, alias]);
    }

    return alias;
  }

  function getSelection({
    key,
    prevSelection,
    args,
    argTypes,
    type,
    unions,
  }: Pick<
    SelectionConstructorArgs,
    'key' | 'prevSelection' | 'args' | 'argTypes' | 'type' | 'unions'
  >) {
    let alias: string | undefined;
    let cacheKey = key + '';
    if (args && argTypes) {
      alias = getVariableAlias(key, args, argTypes);
      cacheKey = alias;
    }

    if (prevSelection) {
      cacheKey = prevSelection.pathString + '.' + cacheKey;
    }

    if (unions?.length) {
      cacheKey += ';' + unions.join(';');
    }

    let selection = selectionCache.get(cacheKey);

    if (selection == null) {
      selection = new Selection({
        key,
        prevSelection,
        args,
        argTypes,
        alias,
        type,
        unions,
        id: ++uniqueSelectionId,
      });
      selectionCache.set(cacheKey, selection);
    } else if (args) {
      selection.args = args;
    }

    return selection;
  }

  return {
    getSelection,
    restore,
    backup,
  };
}
