import { ReactNode, useEffect } from 'react';

import { useOnFirstMount } from '../common';

import type { GQlessClient, HydrateCacheOptions } from 'gqless';
import type { ReactClientOptionsWithDefaults } from '../utils';

export interface UseHydrateCacheOptions extends Partial<HydrateCacheOptions> {
  /**
   * Cache snapshot, returned from `prepareReactRender`
   */
  cacheSnapshot: string | undefined;
  /**
   * If it should refetch everything after the component is mounted
   *
   * @default
   * false
   */
  shouldRefetch?: boolean;
}

/**
 * Props with `cacheSnapshot` that would be returned from `prepareReactRender`
 */
export type PropsWithServerCache<
  T extends Record<string | number, unknown> = {}
> = {
  /**
   * Cache snapshot, returned from `prepareReactRender`
   */
  cacheSnapshot?: string;
} & T;

export interface UseHydrateCache {
  ({ cacheSnapshot, shouldRefetch }: UseHydrateCacheOptions): void;
}

export interface PrepareReactRender {
  (element: ReactNode): Promise<{
    cacheSnapshot: string;
  }>;
}

export function createSSRHelpers(
  client: GQlessClient<any>,
  { defaults: { refetchAfterHydrate } }: ReactClientOptionsWithDefaults
) {
  const prepareReactRender: PrepareReactRender = async function prepareReactRender(
    element: ReactNode
  ) {
    const ssrPrepass = (await import('react-ssr-prepass')).default;
    return client.prepareRender(() => ssrPrepass(element));
  };
  const useHydrateCache: UseHydrateCache = function useHydrateCache({
    cacheSnapshot,
    shouldRefetch = refetchAfterHydrate,
  }: UseHydrateCacheOptions) {
    useOnFirstMount(() => {
      if (cacheSnapshot) {
        client.hydrateCache({ cacheSnapshot, shouldRefetch: false });
      }
    });
    useEffect(() => {
      if (shouldRefetch) {
        client.refetch(client.query).catch(console.error);
      }
    }, [shouldRefetch]);
  };

  return {
    useHydrateCache,
    prepareReactRender,
  };
}
