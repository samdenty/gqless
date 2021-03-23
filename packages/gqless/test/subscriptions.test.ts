import { waitForExpect } from 'test-utils';

import { createDeferredPromise } from '../src/Utils';
import { createTestClient } from './utils';

test('subscriptions with scheduler', async () => {
  const { subscription, mutation, scheduler, server } = await createTestClient(
    undefined,
    undefined,
    {
      subscriptions: true,
    }
  );

  try {
    subscription.newNotification;

    await scheduler.resolving!.promise;

    mutation.sendNotification({
      message: 'THIS_IS_A_MESSAGE',
    });

    await scheduler.resolving!.promise;

    await waitForExpect(() => {
      expect(subscription.newNotification).toBe('THIS_IS_A_MESSAGE');
    }, 1000);
  } finally {
    await server.close();
  }
});

test('subscriptions with resolved', async () => {
  const {
    resolved,
    subscription,
    mutate,
    subscriptionsClient,
    server,
  } = await createTestClient(undefined, undefined, {
    subscriptions: true,
  });

  const unsubscribePromise = createDeferredPromise<() => Promise<void>>();

  const dataPromise = createDeferredPromise<string>();

  try {
    await resolved(
      () => {
        return subscription.newNotification;
      },
      {
        onSubscription(event) {
          unsubscribePromise.resolve(event.unsubscribe);

          switch (event.type) {
            case 'data': {
              if (event.data) dataPromise.resolve(event.data);
              break;
            }
          }
        },
      }
    );

    await unsubscribePromise.promise;

    await mutate(
      (mutation) => {
        return mutation.sendNotification({
          message: 'OK',
        });
      },
      {
        onComplete(data) {
          expect(data).toBe(true);
        },
      }
    );

    await dataPromise.promise.then((data) => expect(data).toBe('OK'));
  } finally {
    (await unsubscribePromise.promise)();
    await subscriptionsClient!.close();
    await server.close();
  }
}, 5000);
