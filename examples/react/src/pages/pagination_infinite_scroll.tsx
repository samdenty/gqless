import { useEffect, useState } from 'react';
import { graphql } from '../components/client';
import { query, Human } from '../graphql/gqless';
import { useInView } from 'react-intersection-observer';
import { Stack, Text } from '@chakra-ui/react';

const amount = 20;
export default graphql(
  function PaginationPage() {
    const [humans, setHumans] = useState<Human[]>(() => []);
    const [after, setAfter] = useState<string | null | undefined>(null);
    const [first, setFirst] = useState<number | null>(amount);

    const {
      nodes,
      pageInfo: { startCursor, endCursor, hasNextPage, hasPreviousPage },
    } = query.paginatedHumans({
      input: {
        first,
        after,
      },
    });

    const { ref, inView } = useInView({
      threshold: 0,
    });

    useEffect(() => {
      if (nodes.length && nodes.every((v) => v.name)) {
        setHumans((prev) => [...prev, ...nodes]);
      }
    }, [nodes, setHumans]);

    useEffect(() => {
      if (inView && hasNextPage) {
        setAfter(endCursor);
        setFirst(amount);
      }
    }, [inView, hasNextPage, setAfter, setFirst, endCursor]);

    return (
      <Stack>
        <Text whiteSpace="pre-wrap">
          {JSON.stringify(
            {
              time: query.time,
              data: humans.map(({ id, name }) => ({ id, name })),
              startCursor,
              endCursor,
              hasNextPage,
              hasPreviousPage,
            },
            null,
            2
          )}
        </Text>

        {hasNextPage && <Text ref={ref}>Loading...</Text>}
      </Stack>
    );
  },
  {
    suspense: false,
    staleWhileRevalidate: false,
  }
);
