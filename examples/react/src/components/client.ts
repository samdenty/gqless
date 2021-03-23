import { createLogger } from '@gqless/logger';

import { createReactClient } from '@gqless/react';
import { client, GeneratedSchema } from '../graphql/gqless';

export const {
  useTransactionQuery,
  useQuery,
  state,
  graphql,
  useRefetch,
  useLazyQuery,
  prepareReactRender,
  useHydrateCache,
  useMutation,
  useMetaState,
  useSubscription,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    suspense: true,
    staleWhileRevalidate: false,
    transactionQuerySuspense: false,
  },
});

if (typeof window !== 'undefined') {
  const logger = createLogger(client, {});
  logger.start();
}

export const { refetch, buildSelection } = client;
