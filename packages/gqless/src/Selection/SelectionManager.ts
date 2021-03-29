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
  restoreAliases(backup: AliasBackupTuple[]): void;
  backupAliases(): AliasBackupTuple[];
}

export type AliasBackupTuple = [aliasKey: string, alias: string, incId: number];

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
    string,
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

  let restoredAliases: AliasBackupTuple[] | undefined;

  function restoreAliases(backup: AliasBackupTuple[]) {
    restoredAliases = backup;
    for (const [aliasKey, alias, incId] of backup) {
      const key = aliasKey.slice(0, aliasKey.indexOf('-'));
      aliasMap.set(aliasKey, alias);
      incIds[key] = incId;
    }
  }

  function backupAliases(): AliasBackupTuple[] {
    if (restoredAliases) return restoredAliases;

    const backup: AliasBackupTuple[] = [];
    for (const [aliasKey, alias] of aliasMap.entries()) {
      const key = aliasKey.slice(0, aliasKey.indexOf('-'));
      backup.push([aliasKey, alias, incIds[key]]);
    }

    return (restoredAliases = backup);
  }

  function getVariableAlias(
    key: string | number,
    variables: Record<string, unknown>,
    variableTypes: Record<string, string>
  ) {
    const aliasKey = `${key}-${JSON.stringify(variables)}-${JSON.stringify(
      variableTypes
    )}`;
    let alias = aliasMap.get(aliasKey);

    if (alias == null) {
      if (incIds[key] === undefined) incIds[key] = -1;
      const incId = ++incIds[key];
      alias = `${key}${incId}`;
      aliasMap.set(aliasKey, alias);

      if (restoredAliases) restoredAliases.push([aliasKey, alias, incId]);
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
    restoreAliases,
    backupAliases,
  };
}
