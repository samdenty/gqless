import { watch } from 'rollup';
import { parentPort, workerData } from 'worker_threads';
import {
  buildWriteTypes,
  getInputOptions,
  getOutputOptions,
  writeIndex,
} from './index.js';

function rollupWatch(
  /**
   * @type {string}
   */
  moduleName,
  /**
   * @type {string}
   */
  directory,
  /**
   * @type {string | undefined}
   */
  inputFile
) {
  const { outputOptions, write } = getOutputOptions(moduleName, directory);

  const input = getInputOptions(directory, inputFile);
  const watcher = watch({
    ...input,
    output: outputOptions,
    watch: {
      skipWrite: true,
      chokidar: {
        ignoreInitial: false,
      },
    },
  });

  let startTime = Date.now();

  watcher.on('change', (file) => {
    console.log(`File "${file}" changed for "${moduleName}"`);
  });

  watcher.on('event', (event) => {
    switch (event.code) {
      case 'BUNDLE_START': {
        startTime = Date.now();
        console.log(`Starting ${moduleName}`);
        parentPort.postMessage({
          type: 'start',
        });
        break;
      }
      case 'BUNDLE_END': {
        const { result } = event;

        Promise.all([
          write(result),
          buildWriteTypes(result, undefined, directory),
        ])
          .then(async () => {
            await writeIndex(moduleName, directory);

            console.log(
              `\n-- "${moduleName}" bundle finished in ${
                Date.now() - startTime
              }ms. --`
            );

            parentPort.postMessage({
              type: 'success',
            });
          })
          .catch(console.error);
        break;
      }
      case 'ERROR': {
        console.error(event.error);
        break;
      }
    }
  });

  return {
    watcher,
  };
}

/**
 * @type {import("rollup").RollupWatcher | undefined}
 */
let watcher;

parentPort.on(
  'message',
  (
    /**
     * @type {{ type: string, value: any }}
     */
    { type }
  ) => {
    switch (type) {
      case 'start': {
        if (watcher) {
          watcher.close();
          watcher = null;
        }

        watcher = rollupWatch(
          workerData.name,
          workerData.directory,
          workerData.inputFile
        ).watcher;
        break;
      }
      case 'stop': {
        if (watcher) {
          watcher.close();
          watcher = null;
        }
        break;
      }
    }
  }
);

process.on('unhandledRejection', (err) => {
  console.error(err);
});
process.on('uncaughtException', (err) => {
  console.error(err);
});
