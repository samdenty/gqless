import type { ProxyAccessor } from '../Cache';
import type { InnerClientState, Refetch } from '../Client/client';
import { decycle, isPlainObject, retrocycle } from '../Utils';

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
      const recoveredCache = retrocycle(JSON.parse(cacheSnapshot));
      if (
        isPlainObject(recoveredCache) &&
        isPlainObject(recoveredCache.cache)
      ) {
        Object.assign(innerState.clientCache.cache, recoveredCache.cache);
        if (
          isPlainObject(recoveredCache.normalizedCache) &&
          innerState.clientCache.normalizedCache
        ) {
          Object.assign(
            innerState.clientCache.normalizedCache,
            recoveredCache.normalizedCache
          );
        }

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

  const prepareRender = async (render: () => Promise<void> | void) => {
    for (const key of Object.keys(innerState.clientCache.cache)) {
      delete innerState.clientCache.cache[key];
    }
    if (innerState.clientCache.normalizedCache) {
      for (const key of Object.keys(innerState.clientCache.normalizedCache)) {
        delete innerState.clientCache.normalizedCache[key];
      }
    }

    await render();

    await innerState.scheduler.resolving?.promise;

    return {
      cacheSnapshot: JSON.stringify(
        decycle({
          cache: innerState.clientCache.cache,
          normalizedCache: innerState.clientCache.normalizedCache,
        })
      ),
    };
  };

  return {
    hydrateCache,
    prepareRender,
  };
}
