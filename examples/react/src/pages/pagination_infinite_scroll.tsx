import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDebounce } from 'react-use';

import { Stack, Text } from '@chakra-ui/react';

import { useQuery } from '../components/client';
import { Human } from '../graphql/gqless';

const first = 20;
export default function PaginationPage() {
  const [after, setAfter] = useState<string | null | undefined>(null);

  const args = {
    input: {
      first,
      after,
    },
  };

  const { paginatedHumans, time } = useQuery({
    staleWhileRevalidate: after,
    suspense: false,
  });

  const {
    __typename,
    nodes,
    pageInfo: { startCursor, endCursor, hasNextPage, hasPreviousPage },
  } = paginatedHumans(args);

  const [humans, setHumans] = useState<Human[]>(() => {
    if (__typename) return nodes;

    return [];
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    // This way, we can check if the data is "skeleton", or real data
    if (__typename) {
      setHumans((prev) =>
        [...prev, ...nodes].filter((value, index, self) => {
          return self.indexOf(value) === index;
        })
      );
    }
  }, [__typename, nodes, setHumans]);

  const [next] = useDebounce(
    () => {
      if (inView && hasNextPage && endCursor) {
        setAfter(endCursor);
      }
    },
    100,
    [inView, hasNextPage, setAfter, endCursor]
  );

  useEffect(() => {
    next();
  }, [next]);

  return (
    <Stack>
      <Text whiteSpace="pre-wrap">
        {JSON.stringify(
          {
            time,
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
}
