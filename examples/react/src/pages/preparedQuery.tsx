import { Button, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { prepareQuery } from '../components/client';

const { usePrepared, preload, refetch } = prepareQuery((query) => {
  return query.time!;
});

function TimeComponent() {
  const { data, isRefetching } = usePrepared({
    suspense: true,
  });

  return (
    <Stack>
      <Text>Time: {data}</Text>
      <Button isLoading={isRefetching} onClick={() => refetch()}>
        Refetch
      </Button>
    </Stack>
  );
}

export default function PreparedQueryPage() {
  const [showTimeComponent, setShowTimeComponent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Stack>
      <Button
        isLoading={isLoading}
        onClick={() => {
          setIsLoading(true);

          preload().then(() => {
            setShowTimeComponent(true);
            setIsLoading(false);
          });
        }}
      >
        Show Time Component
      </Button>
      {showTimeComponent && <TimeComponent />}
    </Stack>
  );
}
