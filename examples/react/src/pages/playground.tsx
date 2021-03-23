import { Stack, Text } from '@chakra-ui/react';
import { memo, useEffect } from 'react';
import { useQuery } from '../components/client';
import { useIsomorphicLayoutEffect } from '../components/common';

const C = () => {
  Promise.resolve().then(() => console.log('Promise resolve C'));
  setTimeout(() => {
    console.log('timeout 0 C');
  }, 0);
  useIsomorphicLayoutEffect(() => {
    console.log('layout effect C');
  }, []);
  useEffect(() => {
    console.log('useEffect C');
  }, []);
  const c = <Text>C</Text>;

  console.log('render C');

  return c;
};

const B = () => {
  Promise.resolve().then(() => console.log('Promise resolve B'));
  setTimeout(() => {
    console.log('timeout 0 B');
  }, 0);
  useIsomorphicLayoutEffect(() => {
    console.log('layout effect B');
  }, []);
  useEffect(() => {
    console.log('useEffect B');
  }, []);
  const b = (
    <>
      <Text>B</Text>
      <C />
    </>
  );

  console.log('render B');

  return b;
};

const A = memo(() => {
  Promise.resolve().then(() => console.log('Promise resolve A'));
  setTimeout(() => {
    console.log('timeout 0 A');
  }, 0);
  useIsomorphicLayoutEffect(() => {
    console.log('layout effect A');
  }, []);
  useEffect(() => {
    console.log('useEffect A');
  }, []);
  const a = (
    <>
      <Text>A</Text>
      <B />
    </>
  );
  console.log('render A');

  return a;
});

export default function Asd() {
  const query = useQuery({
    suspense: false,
  });

  return (
    <Stack>
      <A />
      <Text whiteSpace="pre-wrap">
        {JSON.stringify(
          {
            a: query.human1.name,
            b: query.human1.dogs?.map((v) => v.id),
          },
          null,
          2
        )}
      </Text>

      <Text whiteSpace="pre-wrap">
        {JSON.stringify(
          {
            a: query.human1Other.name,
            b: query.human1Other.dogs?.map((v) => v.owner?.name),
          },
          null,
          2
        )}
      </Text>
    </Stack>
  );
}
