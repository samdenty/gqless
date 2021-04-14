import { renderHook } from '@testing-library/react-hooks';

import { createReactTestClient } from './utils';

test('Basic Non-Suspense', async () => {
  const { useQuery } = await createReactTestClient();

  const { result, waitFor } = renderHook(() => {
    const query = useQuery({
      suspense: false,
    });

    return {
      hello: query.hello,
      $state: query.$state,
    };
  });

  expect(result.current.hello).toBe(undefined);

  await waitFor(() => result.current.$state.isLoading === true);

  expect(result.current.hello).toBe(undefined);

  await waitFor(() => result.current.$state.isLoading === false);

  expect(result.current.hello).toBe('hello world');
});

test('Basic Suspense', async () => {
  const { useQuery } = await createReactTestClient();

  const { result, waitForNextUpdate } = renderHook(() => {
    const query = useQuery({
      suspense: true,
    });

    return query.hello;
  });

  expect(result.current).toBe(undefined);

  await waitForNextUpdate();

  expect(result.current).toBe('hello world');
});
