import { renderHook } from '@testing-library/react-hooks';

import { createReactTestClient } from './utils';

test('Basic Non-Suspense', async () => {
  const { useQuery } = await createReactTestClient();

  const { result, waitFor } = renderHook(() => {
    const { hello, gqlessState } = useQuery({
      suspense: false,
    });

    return {
      hello,
      gqlessState,
    };
  });

  expect(result.current.hello).toBe(undefined);

  await waitFor(() => result.current.gqlessState.isLoading === true);

  expect(result.current.hello).toBe(undefined);

  await waitFor(() => result.current.gqlessState.isLoading === false);

  expect(result.current.hello).toBe('hello world');
});

test('Basic Suspense', async () => {
  const { useQuery } = await createReactTestClient();

  const { result, waitForNextUpdate } = renderHook(() => {
    const { hello } = useQuery({
      suspense: true,
    });

    return hello;
  });

  expect(result.current).toBe(undefined);

  await waitForNextUpdate();

  expect(result.current).toBe('hello world');
});
