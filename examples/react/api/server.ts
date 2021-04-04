import Fastify from 'fastify';
import ms from 'ms';
import FastifyNext from 'fastify-nextjs';
import { resolve } from 'path';
import mercuriusUpload from 'mercurius-upload';
import AltairFastify from 'altair-fastify-plugin';

import { register } from './graphql';

const app = Fastify({
  logger: true,
  pluginTimeout: ms('60 seconds'),
});

app.register(AltairFastify);

app.register(mercuriusUpload, {});

register(app).catch(console.error);

console.log('> React example API server started.');

app
  .register(FastifyNext, {
    logLevel: 'error',
    dir: resolve(__dirname, '../'),
  })
  .after(() => {
    try {
      app.next('/*');
    } catch (err) {
      console.error(err);
    }
  });

app.listen(4141, '0.0.0.0', (err) => {
  if (err) throw err;
});
