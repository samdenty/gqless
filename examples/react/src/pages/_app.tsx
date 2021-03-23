import type { AppProps } from 'next/app';
import { Suspense } from 'react';

import { ChakraProvider, Stack } from '@chakra-ui/react';

import { MetaClient } from '../components/meta';
import { NoSSR } from '../components/NoSSR';
import SSRPage from './ssr';

function MyApp({ Component, pageProps }: AppProps) {
  const commonComponents = (
    <Stack align="center">
      <MetaClient />
      <Component {...pageProps} />
    </Stack>
  );
  if (Component === SSRPage) {
    return <ChakraProvider>{commonComponents}</ChakraProvider>;
  }
  return (
    <ChakraProvider>
      <NoSSR>
        <Suspense fallback="Root Loading...">{commonComponents}</Suspense>
      </NoSSR>
    </ChakraProvider>
  );
}

export default MyApp;
