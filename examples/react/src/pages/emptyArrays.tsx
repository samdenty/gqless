import { ListItem, OrderedList, Stack } from '@chakra-ui/react';
import { graphql } from '../components/client';
import { query } from '../graphql/gqless';

export default graphql(
  function EmptyArrays() {
    query.time;
    return (
      <Stack>
        <OrderedList>
          {query.emptyScalarArray.map((value = 0) => {
            return <ListItem key={value}>{value}</ListItem>;
          })}
        </OrderedList>
        <OrderedList>
          {query.emptyHumanArray.map(({ id = 0, name }) => {
            return (
              <ListItem key={id}>
                ID: {id}
                <br />
                Name: {name}
              </ListItem>
            );
          })}
        </OrderedList>
      </Stack>
    );
  },
  {
    suspense: {
      fallback: 'Loadingasd...',
    },
  }
);
