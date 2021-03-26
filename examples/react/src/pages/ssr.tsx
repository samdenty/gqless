import { RouterContext } from 'next/dist/next-server/lib/router-context';

import { PropsWithServerCache } from '@gqless/react';

import {
  graphql,
  prepareReactRender,
  useHydrateCache,
} from '../components/client';
import { default as RefetchPage } from './refetch';

import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<PropsWithServerCache> = async ({}) => {
  const { cacheSnapshot } = await prepareReactRender(
    <RouterContext.Provider value={{} as any}>
      <RefetchPage />
    </RouterContext.Provider>
  );

  return {
    props: {
      cacheSnapshot,
    },
  };
};

export default graphql(
  function SSRPage({ cacheSnapshot }: PropsWithServerCache) {
    useHydrateCache({
      cacheSnapshot,
    });

    return <RefetchPage />;
  },
  {
    suspense: {
      fallback: 'Loading SSR...',
    },
    staleWhileRevalidate: false,
  }
);
