import { useEffect, useRef } from 'react';

import {
  Button,
  Input,
  ListItem,
  OrderedList,
  Stack,
  Text,
} from '@chakra-ui/react';

import { graphql, useMutation } from '../components/client';
import { query } from '../graphql/gqless';

let nRender = 0;
let commitedRender = 0;
export default graphql(
  function CachePage() {
    const humans = query.humans;
    humans[0].name;

    useEffect(() => {
      console.log('commited render!', ++commitedRender);
    });

    const lastId = parseInt(humans[humans.length - 1].id ?? '0') + 1;
    const nameRef = useRef<HTMLInputElement>(null);
    const [createHuman, { isLoading: isCreatingHuman }] = useMutation(
      ({ createHuman }) => {
        const { id, name, __typename, fieldWithArg } = createHuman({
          id: lastId + '',
          name: nameRef.current?.value ?? 'No Name',
        });

        return { id, name, __typename, fieldWithArg };
      },
      {
        onCompleted(data) {
          humans.push(data);
        },
      }
    );

    return (
      <Stack>
        <Text>Render: {++nRender}</Text>
        <Input ref={nameRef} defaultValue="abc" />
        <Button onClick={() => createHuman()} disabled={isCreatingHuman}>
          {isCreatingHuman ? 'Creating human...' : 'Create human'}
        </Button>
        <OrderedList>
          {humans.map(({ id = null, __typename, name }) => {
            return (
              <ListItem key={id}>
                <Text>
                  Typename: {__typename}
                  <br />
                  Id: {id}
                  <br />
                  Name: {name}
                </Text>
              </ListItem>
            );
          })}
        </OrderedList>
      </Stack>
    );
  },
  {
    suspense: {
      fallback: 'Loading...',
    },
    staleWhileRevalidate: true,
  }
);
