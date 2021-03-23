import { Button, Stack, Text } from '@chakra-ui/react';
import { selectFields } from 'gqless';
import { useMutation, useQuery } from '../components/client';

export default function NormalizedPage() {
  const query = useQuery({
    suspense: true,
    staleWhileRevalidate: true,
  });

  const [renameDog] = useMutation((mutation) => {
    const dog = mutation.renameDog({
      id: '1',
      name: 'z',
    });

    dog?.id;
    dog?.name;
  });

  const [renameHuman] = useMutation((mutation) => {
    const human = mutation.renameHuman({
      id: '1',
      name: 'x',
    });

    human?.id;
    human?.name;
  });

  return (
    <Stack>
      <Text>{query.time}</Text>
      <Button onClick={() => renameDog()}>rename dog</Button>
      <Button onClick={() => renameHuman()}>rename human</Button>
      <Text whiteSpace="pre-wrap">
        {JSON.stringify(selectFields(query.humans, '*', 2), null, 2)}
      </Text>
    </Stack>
  );
}
