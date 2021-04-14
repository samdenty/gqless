import { useQuery, useTransactionQuery } from '../components/client';
import { NoSSR } from '../components/NoSSR';
import { Suspense, useState } from 'react';
import { serializeError } from 'serialize-error';
import { GQlessError } from 'gqless';
import { Stack, Text } from '@chakra-ui/react';

const ExpectedErrorComponent = () => {
  const { data, error } = useTransactionQuery(
    (query) => {
      return {
        a: query.thirdTry,
        b: query.__typename,
      };
    },
    {
      suspense: true,
      retry: true,
      fetchPolicy: 'no-cache',
    }
  );

  const [inlineError, setError] = useState<GQlessError>();

  const query = useQuery({
    suspense: true,
    onError: setError,
  });

  return (
    <>
      <Stack>
        {<Text>HOOK DATA:{JSON.stringify(data)}</Text>}
        {error && (
          <Text>HOOK ERROR: {JSON.stringify(serializeError(error))}</Text>
        )}
      </Stack>
      <Stack>
        INLINE DATA:{' '}
        {JSON.stringify({
          a: query.expectedError,
          b: query.__typename,
        })}
        {inlineError && (
          <Text>
            INLINE ERROR: {JSON.stringify(serializeError(inlineError))}
          </Text>
        )}
      </Stack>
    </>
  );
};

export default function ErrorPage() {
  return (
    <NoSSR>
      <Suspense fallback={<Text>Loading Here...</Text>}>
        <ExpectedErrorComponent />
      </Suspense>
    </NoSSR>
  );
}
