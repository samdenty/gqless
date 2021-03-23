import Fastify from 'fastify';
import ms from 'ms';
import FastifyNext from 'fastify-nextjs';
import { resolve } from 'path';
import { register } from './graphql';

const app = Fastify({
  logger: true,
  pluginTimeout: ms('60 seconds'),
});

register(app).catch(console.error);

console.log('> React example API server started.');

app
  .register(FastifyNext, {
    logLevel: 'error',
    dir: resolve(__dirname, '../'),
  })
  .after(() => {
    app.next('/*');
  });

app.listen(4141, (err) => {
  if (err) throw err;
});
