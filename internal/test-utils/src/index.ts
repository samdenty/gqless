import * as randomstring from 'randomstring';

export { default as waitForExpect } from 'wait-for-expect';

export * as mercurius from 'mercurius';
export * as fastify from 'fastify';

export function assertIsDefined<T = unknown>(
  value: T,
  message?: string
): asserts value is NonNullable<T> {
  if (value == null) {
    const error = new Error(message || 'value is nullable');

    Error.captureStackTrace(error, assertIsDefined);
    throw error;
  }
}

export { randomstring };

export * from './app';
