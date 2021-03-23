import fastify, { FastifyInstance } from 'fastify';
import mercurius, { MercuriusOptions } from 'mercurius';
import { createMercuriusTestClient } from 'mercurius-integration-testing';

export function createTestApp(
  options: MercuriusOptions,
  {
    codegenPath,
  }: {
    codegenPath?: string;
  } = {}
): {
  server: FastifyInstance;
  client: ReturnType<typeof createMercuriusTestClient>;
  isReady: Promise<unknown>;
} {
  const server = fastify();

  server.register(mercurius, options);

  let isReady = codegenPath
    ? new Promise<unknown>((resolve, reject) => {
        import('mercurius-codegen')
          .then(({ default: mercuriusCodegen }) => {
            mercuriusCodegen(server, {
              targetPath: codegenPath,
              silent: true,
              disable: false,
            })
              .then(resolve)
              .catch(reject);
          })
          .catch(reject);
      })
    : ((server.ready() as unknown) as Promise<void>);

  const client = createMercuriusTestClient(server, {
    url: options.path,
  });

  return { server, client, isReady };
}

export * as mercurius from 'mercurius';
export * as fastify from 'fastify';

export { gql } from 'mercurius-codegen';
