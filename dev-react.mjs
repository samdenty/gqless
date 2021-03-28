import { Worker } from 'worker_threads';
import { spawn } from 'child_process';
import { resolve } from 'path';
import open from 'open';
import waitOn from 'wait-on';

const relativeWorkerPath = './internal/build-utils/src/rollup-watch-worker.mjs';
const workerURL = new URL(relativeWorkerPath, import.meta.url);
const core = new Worker(workerURL, {
  workerData: { name: 'gqless', directory: 'packages/gqless' },
});

const subscriptions = new Worker(workerURL, {
  workerData: {
    name: 'gqless-subscriptions',
    directory: 'packages/subscriptions',
  },
});

const react = new Worker(workerURL, {
  workerData: {
    name: 'gqless-react',
    directory: 'packages/react',
  },
});

const logger = new Worker(workerURL, {
  workerData: {
    name: 'gqless-logger',
    directory: 'packages/logger',
  },
});

core.postMessage({
  type: 'start',
  value: {
    name: 'gqless',
    directory: 'packages/gqless',
  },
});

core.on('message', ({ type }) => {
  switch (type) {
    case 'start': {
      killReactExample();
      subscriptions.postMessage({
        type: 'stop',
      });
      react.postMessage({
        type: 'stop',
      });
      logger.postMessage({
        type: 'stop',
      });
      break;
    }
    case 'success': {
      subscriptions.postMessage({
        type: 'start',
      });
      react.postMessage({
        type: 'start',
      });
      logger.postMessage({
        type: 'start',
      });

      break;
    }
  }
});

let readySubscriptions = false;
let readyReact = false;
let readyLogger = false;

subscriptions.on('message', ({ type }) => {
  switch (type) {
    case 'start': {
      killReactExample();
      readySubscriptions = false;

      break;
    }
    case 'success': {
      readySubscriptions = true;
      if (readyReact && readyLogger) {
        startReactExample();
      }
      break;
    }
  }
});

logger.on('message', ({ type }) => {
  switch (type) {
    case 'start': {
      killReactExample();
      readyLogger = false;

      break;
    }
    case 'success': {
      readyLogger = true;
      if (readySubscriptions && readyReact) {
        startReactExample();
      }
      break;
    }
  }
});

react.on('message', ({ type }) => {
  switch (type) {
    case 'start': {
      killReactExample();
      readyReact = false;

      break;
    }
    case 'success': {
      readyReact = true;
      if (readySubscriptions && readySubscriptions) {
        startReactExample();
      }
      break;
    }
  }
});

/**
 * @type {import("child_process").ChildProcess}
 */
let existingReactExampleProcess;

function killReactExample() {
  if (existingReactExampleProcess) {
    existingReactExampleProcess.kill();
  }
}

import.meta.resolve;

function startReactExample() {
  setTimeout(() => {
    killReactExample();
    console.log('[Starting React Example]');
    existingReactExampleProcess = spawn(
      'node',
      [
        resolve('node_modules/tsup/dist/cli.js'),
        'api/server.ts',
        '--clean',
        '--watch',
        '--ignore-watch',
        'db.json',
        '--ignore-watch',
        '.next',
        '--ignore-watch',
        'src',
        '--onSuccess',
        'node dist/server.js',
      ],
      {
        stdio: 'inherit',
        cwd: resolve('examples/react'),
      }
    );
  }, 10);
}

waitOn({
  resources: ['tcp:4141'],
  simultaneous: 1,
})
  .then(() => {
    open('http://localhost:4141').catch(console.error);
  })
  .catch(console.error);

process.on('unhandledRejection', (err) => {
  console.error(err);
});
process.on('uncaughtException', (err) => {
  console.error(err);
});
