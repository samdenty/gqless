const path = require('path')
const fs = require('fs')
const tsdx = require('tsdx/dist/createJestConfig')

module.exports = root => {
  let name

  const packageJsonPath = path.resolve(root, 'package.json')
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = require(packageJsonPath)
    name = packageJson.name
  }

  return {
    ...tsdx.createJestConfig(undefined, root),

    globals: {
      __DEV__: true,
      'ts-jest': {
        diagnostics: false,
      },
    },
    displayName: name,
    name: name,
    snapshotSerializers: ['@internal/fixtures/snapshotSerializer.ts'],
    moduleNameMapper: {
      '@gqless/([^\\/]*)/(?:dist|src)(.*)$': path.resolve(
        __dirname,
        './packages/$1/src$2'
      ),
      '@gqless/([^\\/]*)$': path.resolve(__dirname, './packages/$1/src'),

      'gqless/(?:dist|src)(.*)$': path.resolve(__dirname, './gqless/src$1'),
      gqless$: path.resolve(__dirname, './gqless/src'),
    },
  }
}
