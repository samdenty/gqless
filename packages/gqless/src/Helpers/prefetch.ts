import { InnerClientState } from '../Client/client';
import { SchedulerPromiseValue } from '../Scheduler';

export interface Prefetch<
  GeneratedSchema extends {
    query: object;
  }
> {
  <TData>(fn: (query: GeneratedSchema['query']) => TData):
    | TData
    | (Promise<TData> & { schedulerPromise: Promise<SchedulerPromiseValue> });
}

export function createPrefetch<
  GeneratedSchema extends {
    query: object;
  }
>(
  query: GeneratedSchema['query'],
  { scheduler }: InnerClientState
): Prefetch<GeneratedSchema> {
  return function prefetch<TData>(
    fn: (query: GeneratedSchema['query']) => TData
  ):
    | (Promise<TData> & {
        schedulerPromise: Promise<SchedulerPromiseValue>;
      })
    | TData {
    const existingData = fn(query);

    if (scheduler.resolving) {
      return Object.assign(
        scheduler.resolving.promise.then(() => prefetch(fn)),
        {
          schedulerPromise: scheduler.resolving.promise,
        }
      );
    }
    return existingData;
  };
}
