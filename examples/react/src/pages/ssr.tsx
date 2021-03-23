import { GetServerSideProps } from 'next';
import { renderToString } from 'react-dom/server';

import {
  graphql,
  prepareReactRender,
  useHydrateCache,
} from '../components/client';
import { default as RefetchPage } from './refetch';

interface PageProps {
  page: string;
  cacheSnapshot: string;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const { cacheSnapshot } = await prepareReactRender(<RefetchPage />);

  const page = renderToString(<RefetchPage />);

  return {
    props: {
      page,
      cacheSnapshot,
    },
  };
};

export default graphql(
  function SSRPage({ page, cacheSnapshot }: PageProps) {
    console.log(page, cacheSnapshot);
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
