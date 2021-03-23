export interface DeferredPromise<T> {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (reason: unknown) => void;
}

export function createDeferredPromise<T = void>(): DeferredPromise<T> {
  let resolve: (value: T) => void = undefined as any;
  let reject: (reason: unknown) => void = undefined as any;
  const promise = new Promise<T>((resolveFn: any, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
  });

  return {
    promise,
    resolve,
    reject,
  };
}

export const isInteger = (v: any): v is number => Number.isInteger(v);

export * from './debounce';
export * from './object';
export * from './cycle';
export { default as mergeWith } from 'lodash/mergeWith';
