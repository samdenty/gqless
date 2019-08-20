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

    displayName: name,
    name: name,
    snapshotSerializers: ['testing/snapshotSerializer.ts'],
    moduleNameMapper: {
      '@gqless/(.*)$': path.resolve(__dirname, './packages/$1/src'),
      gqless: path.resolve(__dirname, './gqless/src'),
    },
  }
}
