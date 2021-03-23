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
}

export function createSelectionManager(): SelectionManager {
  const selectionCache = new Map<string, Selection>();

  const incIds: Record<string, number> = {};
  const aliasMap = new Map<string, string>();

  let id = 0;

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
      if (incIds[key] === undefined) incIds[key] = 0;
      alias = `${key}${incIds[key]++}`;
      aliasMap.set(aliasKey, alias);
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
        id: ++id,
      });
      selectionCache.set(cacheKey, selection);
    }

    return selection;
  }

  return {
    getSelection,
  };
}
