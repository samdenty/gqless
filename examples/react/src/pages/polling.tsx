import { Suspense } from 'react';

import {
  Button,
  Divider,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { graphql, refetch, useTransactionQuery } from '../components/client';
import { Dog, query } from '../graphql/gqless';

const DogComp = ({ dog }: { dog: Dog }) => {
  const { data: transactionData } = useTransactionQuery(
    () => {
      return {
        name: dog.name,
      };
    },
    {
      pollInterval: 1000,
      skip: false,
    }
  );
  return (
    <ListItem>
      <Text>Transaction Name {transactionData?.name}</Text>
      <Text>{new Date().toISOString()}</Text>
      <Text>{dog.name}</Text>
      <Text>Owner: {dog.owner?.name ? dog.owner.name : 'No owner 😔'}</Text>
      <Button
        onClick={() => {
          refetch(() => {
            return dog.name;
          }).then((data) => {
            console.log('refetch done!', data);
          });
        }}
      >
        Refetch
      </Button>
    </ListItem>
  );
};

const Dogs = graphql(function Dogs() {
  const dogs = query.dogs;

  useTransactionQuery(
    () => {
      dogs.forEach((dog) => {
        dog.name;
      });
    },
    {
      pollInterval: 2000,
      notifyOnNetworkStatusChange: false,
      skip: false,
    }
  );

  return (
    <UnorderedList>
      <ListItem>XDXD {query.time}</ListItem>
      <Divider />
      {dogs.map((dog, index) => {
        return <DogComp key={index} dog={dog} />;
      })}
    </UnorderedList>
  );
});

export default function Recursive() {
  return (
    <Suspense fallback="loading...">
      <Dogs />
    </Suspense>
  );
}
