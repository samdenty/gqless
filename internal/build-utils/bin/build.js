#!/usr/bin/env node

import { rollup } from 'rollup';
import commander from 'commander';
import { promises, existsSync } from 'fs';

import { getInputOptions, getOutputOptions } from '../src/config.js';
import { buildWriteTypes } from '../src/buildWriteTypes.js';
import { writeIndex } from '../src/writeIndex.js';

const { rmdir } = promises;
const { program } = commander;

program
  .version('1.0.0')
  .option('--clean', 'Clean dist folder before building', true)
  .arguments('<module-name>')
  .action(
    async (
      /**
       * @type {string}
       */
      moduleName,
      /**
       * @type {{ clean?:boolean }}
       */
      options
    ) => {
      const startTime = Date.now();

      console.log(`-- Starting "${moduleName}" bundle --`);

      if (options.clean && existsSync('dist')) {
        await rmdir('dist', {
          recursive: true,
        });
      }

      const { write } = getOutputOptions(moduleName);

      const inputOptions = getInputOptions();

      function writeProgress() {
        process.stdout.write('.', (err) => {
          if (err) console.error(err);
        });
      }
      writeProgress();
      setImmediate(writeProgress);

      const progress = setInterval(writeProgress, 10);

      rollup(inputOptions)
        .then(async (bundle) => {
          writeProgress();

          await write(bundle, writeProgress).then(writeProgress);

          await buildWriteTypes(bundle, writeProgress);

          await bundle.close().then(writeProgress);

          await writeIndex(moduleName).then(writeProgress);

          clearInterval(progress);

          function logEnd() {
            console.log(
              `\n-- "${moduleName}" bundle finished in ${
                Date.now() - startTime
              }ms. --`
            );
          }

          if (process.stdout.clearLine) {
            process.stdout.clearLine(0, logEnd);
          } else {
            logEnd();
          }
        })
        .catch((err) => {
          console.error(err);
          process.exit(1);
        });
    }
  );

program.parse(process.argv);
