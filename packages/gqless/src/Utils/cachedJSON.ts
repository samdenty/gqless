const serializedVariablesCache = new WeakMap<object, string>();

export function serializeVariables(variables: Record<string, unknown>): string {
  let serializedVariables: string;
  if ((serializedVariables = serializedVariablesCache.get(variables)!)) {
    return serializedVariables;
  }
  serializedVariables = JSON.stringify(variables);
  serializedVariablesCache.set(variables, serializedVariables);
  return serializedVariables;
}
