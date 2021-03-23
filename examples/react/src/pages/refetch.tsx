import { Button, Stack, Text } from '@chakra-ui/react';
import { useQuery, useRefetch } from '../components/client';

export default function RefetchPage() {
  const query = useQuery();

  const refetchTime = useRefetch();

  const time = query.time;

  refetchTime.stopWatching();

  const refetchQueryTypename = useRefetch();

  const queryTypename = query.__typename;

  return (
    <Stack>
      <Text>{time}</Text>
      <Button onClick={() => refetchTime()}>
        Refetch time{refetchTime.isLoading ? '...' : ''}
      </Button>

      <Text>{queryTypename}</Text>
      <Button onClick={() => refetchQueryTypename()}>
        Refetch query typename{refetchQueryTypename.isLoading ? '...' : ''}
      </Button>
    </Stack>
  );
}
