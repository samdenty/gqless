import { promises } from 'fs';
import { resolve } from 'path';

const { writeFile } = promises;

export async function writeIndex(
  /**
   * @type {string}
   */
  moduleName,
  /**
   * @type {string}
   */
  cwd = '.'
) {
  await writeFile(
    resolve(cwd, 'dist/index.js'),
    `'use strict'
if (process.env.NODE_ENV === "production") {
module.exports = require('./${moduleName}.cjs.production.min.js')
} else {
module.exports = require('./${moduleName}.cjs.development.js')
}
`
  );
}
