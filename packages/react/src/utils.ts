import type { CreateReactClientOptions, ReactClientDefaults } from './client';

export function areArraysEqual(
  a: unknown[] | null | undefined,
  b: unknown[] | null | undefined
) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  const size = a.length;
  if (size !== b.length) return false;

  for (let i = 0; i < size; ++i) if (a[i] !== b[i]) return false;

  return true;
}

export type ReactClientOptionsWithDefaults = Omit<
  CreateReactClientOptions,
  'defaults'
> & {
  defaults: Required<ReactClientDefaults>;
};
