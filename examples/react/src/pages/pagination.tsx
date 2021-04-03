import { useMemo, useState } from 'react';

import { Button, Stack, Text } from '@chakra-ui/react';

import { usePaginatedQuery, useQuery } from '../components/client';
import { ConnectionArgs } from '../graphql/gqless';

const amount = 3;

export default function NewPaginationPage() {
  const { data, fetchMore, isLoading } = usePaginatedQuery(
    (query, input: ConnectionArgs, { getFields, getArrayFields }) => {
      const { pageInfo, nodes } = query.paginatedHumans({
        input,
      });

      return {
        pageInfo: getFields(pageInfo),
        nodes: getArrayFields(nodes, 'name', 'id'),
      };
    },
    {
      initialArgs: {
        first: amount,
      },
      merge({ data: { existing, incoming }, sortBy, uniqBy }) {
        function getNodes(nodes: typeof incoming.nodes) {
          return sortBy(
            uniqBy(nodes, (v) => v.id),
            (node) => ~~node.id!,
            'desc'
          );
        }
        if (existing) {
          return {
            pageInfo: incoming.pageInfo,
            nodes: getNodes([...existing.nodes, ...incoming.nodes]),
          };
        }
        return { ...incoming, nodes: getNodes(incoming.nodes) };
      },
    }
  );

  const {
    nodes,
    pageInfo: { endCursor, startCursor, hasNextPage, hasPreviousPage },
  } = data || {
    nodes: [] as never,
    pageInfo: {},
  };

  return (
    <Stack>
      <Text whiteSpace="pre-wrap">
        {JSON.stringify(
          {
            // time: query.time,
            data: nodes.map(({ id, name }) => ({ id, name })),
            startCursor,
            endCursor,
            hasNextPage,
            hasPreviousPage,
          },
          null,
          2
        )}
      </Text>
      <Button
        disabled={!hasPreviousPage || isLoading}
        onClick={() => {
          fetchMore(() => {
            return {
              last: amount,
              before: startCursor,
            };
          });
        }}
      >
        previous page
      </Button>

      <Button
        disabled={!hasNextPage || isLoading}
        onClick={() => {
          fetchMore(() => {
            return {
              first: amount,
              after: endCursor,
            };
          });
        }}
      >
        next page
      </Button>
    </Stack>
  );
}

export function OldPaginationPage() {
  const [after, setAfter] = useState<string | null | undefined>(null);
  const [before, setBefore] = useState<string | null | undefined>(null);
  const [first, setFirst] = useState<number | null>(amount);
  const [last, setLast] = useState<number | null>(null);

  const query = useQuery({
    staleWhileRevalidate: useMemo(() => {
      return {
        after,
        before,
        first,
        last,
      };
    }, [after, before, first, last]),
  });

  const {
    nodes,
    pageInfo: { startCursor, endCursor, hasNextPage, hasPreviousPage },
  } = query.paginatedHumans({
    input: {
      first,
      after,
      last,
      before,
    },
  });

  return (
    <Stack>
      <Text whiteSpace="pre-wrap">
        {JSON.stringify(
          {
            time: query.time,
            data: nodes.map(({ id, name }) => ({ id, name })),
            startCursor,
            endCursor,
            hasNextPage,
            hasPreviousPage,
          },
          null,
          2
        )}
      </Text>
      <Button
        disabled={!hasPreviousPage}
        onClick={() => {
          setAfter(null);
          setFirst(null);
          setLast(amount);
          setBefore(startCursor);
        }}
      >
        previous page
      </Button>

      <Button
        disabled={!hasNextPage}
        onClick={() => {
          setBefore(null);
          setLast(null);
          setAfter(endCursor);
          setFirst(amount);
        }}
      >
        next page
      </Button>
    </Stack>
  );
}
