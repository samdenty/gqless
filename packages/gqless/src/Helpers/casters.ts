export type NotUndefined<T> = T extends undefined ? never : T;

/**
 * Remove all possible 'undefined' values recursively from an object
 */
export type NotSkeletonDeep<T> = T extends Array<any>
  ? Array<NotUndefined<NotSkeletonDeep<T[number]>>>
  : T extends (...args: any[]) => any
  ? (...args: Parameters<T>) => NotSkeletonDeep<NotUndefined<ReturnType<T>>>
  : T extends object
  ? {
      [P in keyof T]: NotUndefined<NotSkeletonDeep<T[P]>>;
    }
  : NotUndefined<T>;

/**
 * Remove all possible 'undefined' types in the first level.
 */
export type NotSkeleton<T> = T extends Array<any>
  ? Array<NotSkeleton<T[number]>>
  : T extends (...args: any[]) => any
  ? (...args: Parameters<T>) => NotUndefined<ReturnType<T>>
  : T extends object
  ? {
      [P in keyof T]: NotUndefined<T[P]>;
    }
  : NotUndefined<T>;

const noop = (v: any) => v;

/**
 * Runtime no-op that removes all the undefined types recursively
 */
export const castNotSkeletonDeep: <T>(v: T) => NotSkeletonDeep<T> = noop;

/**
 * Runtime no-op that removes all the undefined types in the first level
 */
export const castNotSkeleton: <T>(v: T) => NotSkeleton<T> = noop;
