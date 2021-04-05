import { Button, Stack, Text } from '@chakra-ui/react';

import { usePaginatedQuery } from '../components/client';
import { ConnectionArgs } from '../graphql/gqless';

const amount = 3;

export default function Page() {
  const { data, fetchMore, isLoading } = usePaginatedQuery(
    (query, input: ConnectionArgs, { getFields, getArrayFields }) => {
      const { pageInfo, nodes } = query.paginatedHumans({
        input,
      });

      return {
        time: query.time,
        pageInfo: getFields(pageInfo),
        nodes: getArrayFields(nodes, 'name', 'id'),
      };
    },
    {
      initialArgs: {
        first: amount,
      },
      merge({ data: { existing, incoming }, sortBy }) {
        function getNodes(nodes: typeof incoming.nodes) {
          return sortBy(nodes, (node) => ~~node.id!, 'desc');
        }
        if (existing) {
          return {
            ...incoming,
            pageInfo: incoming.pageInfo,
            nodes: getNodes([...existing.nodes, ...incoming.nodes]),
          };
        }
        return { ...incoming, nodes: getNodes(incoming.nodes) };
      },
    }
  );

  const {
    nodes = [],
    pageInfo: { endCursor, startCursor, hasNextPage, hasPreviousPage },
    time,
  } = data || { pageInfo: {} };

  return (
    <Stack>
      <Text whiteSpace="pre-wrap">
        {JSON.stringify(
          {
            time,
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
