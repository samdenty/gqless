import { FastifyInstance } from 'fastify';
import { MercuriusOptions } from 'mercurius';
import { createMercuriusTestClient } from 'mercurius-integration-testing';
export declare function createTestApp(
  options: MercuriusOptions,
  {
    codegenPath,
  }?: {
    codegenPath?: string;
  }
): {
  server: FastifyInstance;
  client: ReturnType<typeof createMercuriusTestClient>;
  isReady: Promise<unknown>;
};
export * as mercurius from 'mercurius';
export * as fastify from 'fastify';
export { gql } from 'mercurius-codegen';
