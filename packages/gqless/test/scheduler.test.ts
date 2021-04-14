import { waitForExpect } from 'test-utils';

import { GQlessError } from '../src';
import { createInterceptorManager } from '../src/Interceptor';
import { createScheduler } from '../src/Scheduler';
import { Selection } from '../src/Selection';
import { createDeferredPromise } from '../src/Utils';
import { createTestClient } from './utils';

test('scheduler works with globalInterceptor', async () => {
  const interceptorManager = createInterceptorManager();

  const resolveAllSelections = jest.fn(() => {
    return new Promise<void>((resolve) => setTimeout(resolve, 500));
  });

  createScheduler(interceptorManager, resolveAllSelections, 10);

  const selection = new Selection({
    key: 'a',
    id: 0,
  });

  interceptorManager.addSelection(selection);

  expect(
    interceptorManager.globalInterceptor.fetchSelections.has(selection)
  ).toBe(true);

  await waitForExpect(
    () => {
      expect(resolveAllSelections).toBeCalledTimes(1);
    },
    15,
    1
  );

  interceptorManager.addSelection(
    new Selection({
      key: 'b',
      id: 1,
    })
  );

  await waitForExpect(
    () => {
      expect(resolveAllSelections).toBeCalledTimes(2);
    },
    15,
    1
  );
});

test('scheduler resolve subscriptions', async () => {
  const interceptorManager = createInterceptorManager();

  const fetchedSelections = new Set<Selection>();

  let fetchCalls = 0;

  const ExpectedError = Error('expected');

  const resolveAllSelections = jest.fn(async () => {
    fetchCalls += 1;

    if (fetchCalls >= 3) throw ExpectedError;

    interceptorManager.globalInterceptor.fetchSelections.forEach((s) =>
      fetchedSelections.add(s)
    );
    interceptorManager.globalInterceptor.removeSelections(
      interceptorManager.globalInterceptor.fetchSelections
    );
  });

  const scheduler = createScheduler(
    interceptorManager,
    resolveAllSelections,
    10
  );

  let subscriptionCalls = 0;
  const subscribePromise = new Promise<() => void>((resolve, reject) => {
    const unsubscribe = scheduler.subscribeResolve((promise) => {
      subscriptionCalls += 1;
      promise.then(() => {
        resolve(unsubscribe);
      }, reject);
    });
  });
  expect(subscriptionCalls).toBe(0);
  expect(scheduler.resolving).toBe(null);

  const selectionA = new Selection({
    key: 'a',
    id: 0,
  });
  interceptorManager.globalInterceptor.addSelection(selectionA);
  expect(scheduler.resolving).toBeTruthy();

  waitForExpect(() => {
    expect(subscriptionCalls).toBe(1);
  }, 5);
  expect(fetchCalls).toBe(0);

  const unsubscribe = await subscribePromise;

  expect(scheduler.resolving).toBe(null);

  expect(fetchCalls).toBe(1);

  expect(fetchedSelections.has(selectionA)).toBeTruthy();

  unsubscribe();

  const selectionB = new Selection({
    key: 'b',
    id: 1,
  });
  interceptorManager.globalInterceptor.addSelection(selectionB);

  expect(subscriptionCalls).toBe(1);

  expect(fetchCalls).toBe(1);
  expect(scheduler.resolving).toBeTruthy();
  await scheduler.resolving!.promise;

  expect(fetchCalls).toBe(2);

  expect(fetchedSelections.has(selectionB)).toBeTruthy();

  const selectionC = new Selection({
    key: 'c',
    id: 2,
  });
  const selectionD = new Selection({
    key: 'd',
    id: 3,
  });

  const spy = jest.spyOn(console, 'error').mockImplementationOnce((err) => {
    expect(err).toBe(ExpectedError);
  });

  try {
    interceptorManager.globalInterceptor.addSelection(selectionC);
    interceptorManager.globalInterceptor.addSelection(selectionD);

    expect(scheduler.resolving).toBeTruthy();

    const result = await scheduler.resolving!.promise;

    expect(result?.error).toBe(ExpectedError);

    expect(spy).toBeCalledTimes(1);
  } finally {
    spy.mockRestore();
  }
});

describe('retry', () => {
  test('works on third try', async () => {
    const {
      query,
      scheduler: { errors: schedulerErrors },
    } = await createTestClient();

    const readyPromise = createDeferredPromise();
    let callNumber = 0;

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    const unsubscribe = schedulerErrors.subscribeErrors((data) => {
      callNumber++;

      try {
        switch (callNumber) {
          case 1: {
            expect('newError' in data).toBeTruthy();
            if ('newError' in data) {
              expect(data.newError.message).toBe('try again, throwTry=1');
            }
            break;
          }
          case 2: {
            expect('retryPromise' in data).toBeTruthy();
            if ('retryPromise' in data) {
              data.retryPromise
                .then(({ error }) => {
                  expect(error instanceof GQlessError).toBeTruthy();
                  if (error) {
                    expect(error.message).toBe('try again, throwTry=2');
                  }
                })
                .catch(readyPromise.reject);
            }
            break;
          }
          case 3: {
            expect('newError' in data).toBeTruthy();
            if ('newError' in data) {
              expect(data.newError.message).toBe('try again, throwTry=2');
            }
            break;
          }
          case 4: {
            expect('retryPromise' in data).toBeTruthy();
            if ('retryPromise' in data) {
              data.retryPromise
                .then(({ data }) => {
                  callNumber++;
                  expect(data).toEqual({ throwUntilThirdTry: true });
                  readyPromise.resolve();
                })
                .catch(readyPromise.reject);
            }
            break;
          }
          case 5: {
            expect('selectionsCleaned' in data).toBeTruthy();
            if ('selectionsCleaned' in data) {
              expect(data.selectionsCleaned.length).toBe(1);
              expect(data.selectionsCleaned[0].pathString).toBe(
                'query.throwUntilThirdTry'
              );
            }
            break;
          }
          default:
            throw Error("shouldn't reach");
        }
      } catch (err) {
        readyPromise.reject(err);
      }
    });
    try {
      const firstTry = query.throwUntilThirdTry;

      expect(firstTry).toBe(undefined);

      await readyPromise.promise;
      expect(callNumber).toBe(6);
    } finally {
      consoleErrorSpy.mockRestore();
      unsubscribe();
    }
  });

  test('errors always', async () => {
    const {
      query,
      scheduler: { errors: schedulerErrors },
    } = await createTestClient(undefined, undefined, undefined, {
      retry: {
        maxRetries: 3,
        retryDelay: 50,
      },
    });

    const readyPromise = createDeferredPromise();

    let callNumber = 0;

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    const unsubscribe = schedulerErrors.subscribeErrors((data) => {
      const currentCallNumber = ++callNumber;

      if (callNumber % 2 === 0) {
        expect('retryPromise' in data).toBeTruthy();
        if ('retryPromise' in data) {
          data.retryPromise
            .then(({ error }) => {
              if (currentCallNumber === 6 && callNumber === 7)
                readyPromise.resolve();

              expect(error instanceof GQlessError).toBeTruthy();
              if (error) {
                expect(error.message).toBe('expected error');
              }
            })
            .catch(readyPromise.reject);
        }
      } else {
        expect('newError' in data).toBeTruthy();
        if ('newError' in data) {
          expect(data.newError.message).toBe('expected error');
        }
      }
    });
    try {
      query.throw;

      await readyPromise.promise;

      expect(callNumber).toBe(7);
    } finally {
      unsubscribe();
      consoleErrorSpy.mockRestore();
    }
  }, 10000);
});
