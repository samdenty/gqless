import { watch } from 'rollup';
import commander from 'commander';
import { promises, existsSync } from 'fs';
import { spawn } from 'cross-spawn';
import { parseArgsStringToArgv } from 'string-argv';
import kill from 'tree-kill';

import { getInputOptions, getOutputOptions } from '../src/config.js';
import { buildWriteTypes } from '../src/buildWriteTypes.js';
import { writeIndex } from '../src/writeIndex.js';

const { rmdir } = promises;
const { program } = commander;

program
  .version('1.0.0')
  .arguments('<module-name>')
  .option('--onSuccess <command>', 'Execute command after successful build')
  .option('--clean', 'Clean dist folder before start watching')
  .action(
    async (
      /**
       * @type {string}
       */
      moduleName,
      /**
       * @type {{ onSuccess?: string, clean?:boolean }}
       */
      options
    ) => {
      const inputOptions = getInputOptions();
      const { outputOptions, write } = getOutputOptions(moduleName);

      if (options.clean && existsSync('dist')) {
        console.log('Cleaning dist folder');
        await rmdir('dist', {
          recursive: true,
        });
      }

      const watcher = watch({
        ...inputOptions,
        output: outputOptions,
        watch: {
          skipWrite: true,
          buildDelay: 1000,
          chokidar: {
            ignoreInitial: false,
          },
        },
      });

      let startTime = Date.now();

      /**
       * @type {import("child_process").ChildProcess}
       */
      let onSuccessProcess;

      function cleanUp() {
        if (onSuccessProcess) killPromise(onSuccessProcess.pid);

        process.exit(0);
      }

      process.on('SIGINT', cleanUp);
      process.on('SIGHUP', cleanUp);
      process.on('SIGQUIT', cleanUp);
      process.on('SIGTERM', cleanUp);
      process.on('uncaughtException', cleanUp);
      process.on('exit', cleanUp);

      let pendingKillPromise;

      function killPromise(
        /**
         * @type {number}
         */
        pid
      ) {
        return (pendingKillPromise = new Promise((resolve) => {
          kill(pid, () => {
            resolve();
          });
        }));
      }

      watcher.on('event', (event) => {
        switch (event.code) {
          case 'BUNDLE_START': {
            if (onSuccessProcess) {
              killPromise(onSuccessProcess.pid);
              onSuccessProcess = null;
            }

            startTime = Date.now();

            console.log(`-- Starting "${moduleName}" bundle --`);
            break;
          }
          case 'BUNDLE_END': {
            const { result } = event;

            Promise.all([write(result), buildWriteTypes(result)])
              .then(async () => {
                await writeIndex(moduleName);

                console.log(
                  `\n-- "${moduleName}" bundle finished in ${
                    Date.now() - startTime
                  }ms. --`
                );

                if (pendingKillPromise) await pendingKillPromise;

                if (options.onSuccess) {
                  const parts = parseArgsStringToArgv(options.onSuccess);
                  const exec = parts[0];
                  const args = parts.splice(1);

                  console.log(`$ ${options.onSuccess}`);
                  onSuccessProcess = spawn(exec, args, {
                    stdio: 'inherit',
                    shell: true,
                  });
                }
              })
              .catch(console.error)
              .finally(() => result.close());

            break;
          }
          case 'START': {
            console.log(`Bundling watcher started for ${moduleName}`);
            break;
          }
        }
      });
    }
  );

program.parse(process.argv);
