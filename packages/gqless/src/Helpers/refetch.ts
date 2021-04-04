import { InnerClientState } from '../Client/client';
import { InlineResolveOptions, Resolvers } from '../Client/resolvers';

export function isFunction<T>(v: T | (() => T)): v is () => T {
  return typeof v === 'function';
}

export interface Refetch {
  <T = void | undefined>(refetchArg: T | (() => T)): Promise<T>;
}

export function createRefetch(
  innerState: InnerClientState,
  resolveSelections: Resolvers['resolveSelections'],
  inlineResolved: Resolvers['inlineResolved']
): Refetch {
  const { accessorCache } = innerState;

  const inlineResolveRefetch: InlineResolveOptions<unknown> = {
    refetch: true,
  };

  async function refetch<T = undefined | void>(refetchArg: T | (() => T)) {
    if (isFunction(refetchArg))
      return inlineResolved(refetchArg, inlineResolveRefetch);

    if (accessorCache.isProxy(refetchArg)) {
      const selectionSet = accessorCache.getSelectionSetHistory(refetchArg);

      if (selectionSet) {
        await resolveSelections(selectionSet, undefined, {
          ignoreResolveCache: true,
        });
      }
      return refetchArg;
    }

    if (process.env.NODE_ENV !== 'production') {
      console.warn('gqless: Invalid proxy to refetch!', refetchArg);
    }
    return refetchArg;
  }

  return refetch;
}
