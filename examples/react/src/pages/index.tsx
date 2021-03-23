import { Suspense, useReducer } from 'react';

import { query } from '../graphql/gqless';
import NormalizedPage from './normalized';
import {
  graphql,
  useQuery,
  useRefetch,
  useTransactionQuery,
} from '../components/client';
import { selectFields } from 'gqless';
import { Button, Stack, Text } from '@chakra-ui/react';

const Comp = graphql(function Asd() {
  const queryFromHook = useQuery({});
  const { data } = useTransactionQuery(
    (query) => {
      return query.dogs.map((dog) => {
        return {
          dogName: dog.name,
          owner: dog.owner?.__typename ? 'has owner 😁' : 'no owner 😔',
        };
      });
    },
    {
      skip: false,
    }
  );

  const [n, dispatch] = useReducer(
    (state: number, action: 'add' | 'substact') => {
      return action === 'add' ? ++state : --state;
    },
    1
  );

  const typename = queryFromHook.__typename;

  const refetch = useRefetch();

  try {
    query.paginatedHumans({
      input: {
        first: 10,
      },
    }).__typename;
  } catch (err) {}

  return (
    <Stack whiteSpace="pre-wrap">
      <Text>Time: {queryFromHook.time}</Text>

      <Text>{typename}</Text>

      <Text>{JSON.stringify(selectFields(query.dogs, '*', n), null, 2)}</Text>

      <Text>Depth: {n}</Text>
      <Button onClick={() => dispatch('add')}>add</Button>
      <Button onClick={() => dispatch('substact')}>substract</Button>

      <Text>useTransactionQuery: "{JSON.stringify(data, null, 2)}"</Text>

      <Button
        onClick={() => {
          refetch(query).catch(console.error);
        }}
      >
        Refetch everything
      </Button>
    </Stack>
  );
});

export default function Index() {
  return (
    <Suspense fallback="Loading...">
      <Comp />
      <NormalizedPage />
    </Suspense>
  );
}
