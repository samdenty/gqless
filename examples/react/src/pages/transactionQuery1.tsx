import { Button, Stack, Text } from '@chakra-ui/react';
import { useTransactionQuery } from '../components/client';
import { mutate } from '../graphql/gqless';

let nRenders = 0;
export default function TransactionQuery1() {
  const { data } = useTransactionQuery(
    (query) => {
      return query.human1.name;
    },
    {
      suspense: true,
      fetchPolicy: 'cache-first',
    }
  );

  return (
    <Stack>
      <Text>
        {++nRenders}
        <br />
        query1 {JSON.stringify(data)}
      </Text>

      <Button
        onClick={() => {
          mutate((mutation) => {
            mutation.renameHuman({
              id: '1',
              name: 'OTHER',
            })?.name;
          });
        }}
      >
        Rename Human
      </Button>
    </Stack>
  );
}
