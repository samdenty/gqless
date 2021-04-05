import type { ProxyAccessor } from '../Cache';
import type { InnerClientState, Refetch } from '../Client/client';
import type { SelectionsBackup } from '../Selection/SelectionManager';
import { decycle, isEmptyObject, isPlainObject, retrocycle } from '../Utils';

export interface HydrateCacheOptions {
  /**
   * Cache snapshot, returned from `prepareRender`
   */
  cacheSnapshot: string;
  /**
   * If it should refetch everything after
   *
   * Specify a number greater than `0` to delay the refetch that amount in ms
   *
   * @default
   * false
   */
  shouldRefetch?: boolean | number;
}

export interface HydrateCache {
  ({ cacheSnapshot, shouldRefetch }: HydrateCacheOptions): void;
}

export interface PrepareRender {
  (render: () => Promise<void> | void): Promise<{ cacheSnapshot: string }>;
}

export interface SSRHelpers {
  hydrateCache: HydrateCache;
  prepareRender: PrepareRender;
}

export function createSSRHelpers({
  query,
  refetch,
  innerState,
}: {
  query: ProxyAccessor;
  refetch: Refetch;
  innerState: InnerClientState;
}): SSRHelpers {
  const hydrateCache = ({
    cacheSnapshot,
    shouldRefetch = false,
  }: HydrateCacheOptions) => {
    try {
      const recoveredCache = retrocycle<{
        cache?: Record<string, unknown>;
        normalizedCache?: Record<string, unknown>;
        selections?: SelectionsBackup;
      }>(JSON.parse(cacheSnapshot));
      if (
        isPlainObject(recoveredCache) &&
        isPlainObject(recoveredCache.cache)
      ) {
        const { selections, cache } = recoveredCache;

        innerState.selectionManager.restore(selections);

        innerState.clientCache.mergeCache(cache, 'query');

        if (shouldRefetch) {
          setTimeout(
            () => {
              refetch(query).catch(console.error);
            },
            typeof shouldRefetch === 'number' ? shouldRefetch : 0
          );
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const prepareRender = async (render: () => Promise<unknown> | unknown) => {
    let renderPromise: Promise<unknown> | unknown | undefined;

    const interceptor = innerState.interceptorManager.createInterceptor();
    let prevIgnoreCache = innerState.allowCache;
    try {
      innerState.allowCache = false;
      renderPromise = render();
    } finally {
      innerState.interceptorManager.removeInterceptor(interceptor);
      innerState.allowCache = prevIgnoreCache;
    }

    await Promise.all([
      renderPromise,
      ...innerState.scheduler.pendingSelectionsGroupsPromises.values(),
    ]);

    const selections = innerState.selectionManager.backup();

    const queryCache = innerState.clientCache.cache.query || {};

    // We only want to pass the cache that is part of the selections made
    // Not all the acumulated server cache
    const cache: Record<string, unknown> = {};
    for (const {
      type,
      // cachePath has always the form ["query", "user", "email"]
      cachePath: [, queryPath],
    } of interceptor.fetchSelections) {
      // SelectionType.Query === 0
      if (type === 0) {
        const value = queryCache[queryPath];
        if (value !== undefined) cache[queryPath] = value;
      }
    }

    return {
      cacheSnapshot: JSON.stringify({
        ...decycle({
          cache: isEmptyObject(cache) ? undefined : cache,
        }),
        selections:
          selections[0].length || selections[1].length ? selections : undefined,
      }),
    };
  };

  return {
    hydrateCache,
    prepareRender,
  };
}
