import * as randomstring from 'randomstring';
export { default as waitForExpect } from 'wait-for-expect';
export * as mercurius from 'mercurius';
export * as fastify from 'fastify';
export declare function assertIsDefined<T = unknown>(
  value: T,
  message?: string
): asserts value is NonNullable<T>;
export { randomstring };
export * from './app';
