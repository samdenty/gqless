import React from 'react';
import { renderToString } from 'react-dom/server';
import { waitForExpect } from 'test-utils';

import { createTestClient } from './utils';

describe('server side rendering', () => {
  test('expected usage works', async () => {
    const {
      hydrateCache,
      prepareRender,
      query,
      setCache,
      scheduler,
    } = await createTestClient();

    const TestComponent = () => {
      return (
        <div>
          <p>{query.hello}</p>
          <p>{query.time}</p>
        </div>
      );
    };

    const { cacheSnapshot } = await prepareRender(async () => {
      renderToString(<TestComponent />);
    });

    expect(scheduler.resolving).toBe(null);

    const time0 = query.time;

    expect(scheduler.resolving).toBe(null);
    expect(time0).toBeTruthy();

    // We simulate the difference in server-client resetting the cache
    setCache(query, null);

    hydrateCache({
      cacheSnapshot,
      shouldRefetch: true,
    });

    const page = renderToString(<TestComponent />);

    expect(page).toContain('hello world');
    expect(page).toContain(time0);

    const time1 = query.time;

    expect(time1).toBe(time0);

    expect(time1).toBeTruthy();

    expect(page).toContain(time1);

    expect(scheduler.resolving).toBe(null);

    await waitForExpect(
      () => {
        expect(query.time).not.toBe(time1);
      },
      500,
      1
    );

    const time2 = query.time;

    const page2 = renderToString(<TestComponent />);

    expect(page2).toContain('hello world');

    expect(time2).toBeTruthy();

    expect(page2).toContain(time2);

    hydrateCache({
      cacheSnapshot,
      shouldRefetch: false,
    });

    const page3 = renderToString(<TestComponent />);

    expect(page3).toContain('hello world');
    expect(page3).toContain(time0);

    hydrateCache({
      cacheSnapshot,
      shouldRefetch: 100,
    });

    await waitForExpect(
      () => {
        expect(query.time).not.toBe(time1);
      },
      500,
      1
    );

    const time3 = query.time;

    const page4 = renderToString(<TestComponent />);

    expect(page4).toContain('hello world');

    expect(time3).toBeTruthy();

    expect(page4).toContain(time3);
  });

  test('invalid cache snapshot', async () => {
    const { hydrateCache } = await createTestClient();

    const errorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation((message) => {
        expect(message).toEqual(
          SyntaxError('Unexpected token i in JSON at position 0')
        );
      });

    hydrateCache({
      cacheSnapshot: 'invalid',
    });

    expect(errorSpy).toBeCalledTimes(1);

    errorSpy.mockRestore();
  });

  test('empty cache snapshot', async () => {
    const { hydrateCache, cache } = await createTestClient();

    const cacheSnapshot1 = JSON.stringify(cache);

    hydrateCache({
      cacheSnapshot: JSON.stringify({}),
    });

    const cacheSnapshot2 = JSON.stringify(cache);

    expect(cacheSnapshot1).toBe(cacheSnapshot2);
  });

  test('empty render function', async () => {
    const { prepareRender } = await createTestClient();

    const { cacheSnapshot } = await prepareRender(() => {});

    expect(cacheSnapshot).toBe(JSON.stringify({}));
  });
});
