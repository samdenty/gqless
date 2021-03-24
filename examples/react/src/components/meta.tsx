import Link from 'next/link';

import { Button, Stack, Text } from '@chakra-ui/react';

import { useMetaState } from './client';

const NavigationList = [
  '/',
  '/normalized',
  '/refetch',
  '/stringArray',
  '/ssr',
  '/polling',
  '/error',
  '/playground',
  '/pagination',
  '/pagination_infinite_scroll',
  '/cache',
  '/emptyArrays',
  '/subscriptions',
  '/preparedQuery',
  '/useQueryTest',
  '/prepass',
];

export const MetaClient = () => {
  const { isFetching, errors } = useMetaState({
    onStartFetching() {},
    onDoneFetching() {},
    onError() {},
  });

  return (
    <Stack
      shadow="md"
      borderWidth="1px"
      borderRadius="5px"
      padding="5px"
      width="fit-content"
      marginY="0.3em"
      align="center"
    >
      <Text fontSize="1.5em" fontWeight="bold">
        {isFetching ? 'Fetching...' : 'Done'}
      </Text>
      {errors && (
        <Text whiteSpace="pre-wrap">{JSON.stringify(errors, null, 2)}</Text>
      )}

      <Stack as="nav" isInline wrap="wrap">
        {NavigationList.map((href, key) => {
          return (
            <Link href={href} key={key} passHref>
              <Button as="a" margin="0.25em !important">
                {href}
              </Button>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};
