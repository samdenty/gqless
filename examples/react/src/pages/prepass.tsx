import { ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '../components/client';

let renderCount = 0;
export default function PrepassPage() {
  const query = useQuery({
    suspense: false,
    prepare({ prepass, query }) {
      prepass(query, 'dogs.name');
    },
  });

  renderCount++;

  if (query.$state.isLoading) {
    console.log('IS LOADING');
  } else {
    console.log("IT'S NOT LOADING");
  }

  if (query.$state.isLoading) return <Text>Loading...</Text>;

  return (
    <OrderedList>
      <Text>Render Count: {renderCount}</Text>
      {query.dogs.map((dog) => {
        return (
          <ListItem key={dog.id || 0}>
            <Stack>
              <Text>
                ID: <b>{dog.id}</b>
              </Text>
              <Text>
                Name: <b>{dog.name}</b>
              </Text>
              <Text></Text>
            </Stack>
          </ListItem>
        );
      })}
    </OrderedList>
  );
}
