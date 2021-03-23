import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(
  //@ts-expect-error
  import.meta.url
);

const { terser } = require('rollup-plugin-terser');

/**
 * @type {import("@rollup/plugin-replace").default}
 */
const replace = require('@rollup/plugin-replace');

const { getBabelOutputPlugin } = require('@rollup/plugin-babel');

/**
 * @type {import("@rollup/plugin-typescript").default}
 */
const typescript = require('@rollup/plugin-typescript');

const cleanup = require('rollup-plugin-cleanup');

function outputReplace(
  /**
   * @type {import("@rollup/plugin-replace").RollupReplaceOptions}
   */
  options
) {
  const { buildStart, transform, ...rest } = replace({
    ...options,
    preventAssignment: true,
  });

  return rest;
}

const babelPlugin = getBabelOutputPlugin({
  babelrc: false,
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
  //@ts-expect-error
  assumptions: {
    noDocumentAll: true,
  },
});

export function getOutputOptions(
  /**
   * @type {string}
   */
  moduleName,
  /**
   * @type {string}
   */
  cwd = ''
) {
  /**
   * @type {import("rollup").OutputOptions[]}
   */
  const outputOptions = [
    {
      file: resolve(cwd, `dist/${moduleName}.cjs.development.js`),
      format: 'cjs',
      sourcemap: true,
      preferConst: true,
      exports: 'named',
      plugins: [babelPlugin],
    },
    {
      file: resolve(cwd, `dist/${moduleName}.cjs.production.min.js`),
      format: 'cjs',
      sourcemap: true,
      preferConst: true,
      exports: 'named',
      plugins: [
        outputReplace({
          values: {
            'process.env.NODE_ENV': '"production"',
          },
        }),
        babelPlugin,
        terser(),
      ],
    },
    {
      file: resolve(cwd, `dist/${moduleName}.esm.js`),
      format: 'esm',
      sourcemap: true,
      preferConst: true,
      plugins: [
        outputReplace({
          values: {
            'lodash/': 'lodash-es/',
          },
        }),
        babelPlugin,
      ],
      exports: 'named',
    },
  ];

  return {
    outputOptions,
    async write(
      /**
       * @type {import("rollup").RollupBuild}
       */
      bundle,
      afterFileWrite = () => {}
    ) {
      await Promise.all(
        outputOptions.map((output) => bundle.write(output).then(afterFileWrite))
      );
    },
  };
}

export function getInputOptions(
  /**
   * @type {string | undefined}
   */
  cwd = '.',
  /**
   * @type {string | undefined}
   */
  input
) {
  if (!input) {
    input = 'src/index.ts';

    if (existsSync(resolve(cwd, 'src/index.tsx'))) {
      input = 'src/index.tsx';
    }

    if (cwd) {
      input = resolve(cwd, input);
    }
  }

  const { dependencies, peerDependencies } = JSON.parse(
    readFileSync(resolve(cwd || process.cwd(), './package.json'), {
      encoding: 'utf8',
    })
  );

  const outDir = resolve(cwd || process.cwd(), 'dist');

  /**
   * @type {import("rollup").InputOptions}
   */
  const inputOptions = {
    input,
    cache: false,
    plugins: [
      typescript({
        incremental: false,
        tsBuildInfoFile: undefined,
        declaration: true,
        outDir,
        noEmitOnError: true,
        target: 'es2020',
        module: 'esnext',
        tsconfig: resolve(cwd, 'tsconfig.json'),
      }),
      cleanup({
        comments: 'none',
        extensions: ['js', 'mjs', 'ts', 'tsx'],
      }),
    ],
    external: [
      /lodash.*/g,
      'fs',
      'path',
      /prettier\/.+/g,
      'prettier/parser-graphql',
      ...Object.keys(dependencies || {}),
      ...Object.keys(peerDependencies || {}),
    ],
    onwarn(warning, next) {
      if (warning.code === 'EVAL') return;

      next(warning);
    },
    treeshake: {
      propertyReadSideEffects: false,
    },
  };

  return inputOptions;
}
