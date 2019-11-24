import path from 'path'
// @ts-ignore
import pluginTester from 'babel-plugin-tester'
import plugin from 'babel-plugin-gqless'

const projectRoot = path.join(__dirname, '../../')

expect.addSnapshotSerializer({
  print(val) {
    return val.split(projectRoot).join('<PROJECT_ROOT>/')
  },
  test(val) {
    return typeof val === 'string'
  },
})

const fixture = (filename: string) => ({
  fixture: require.resolve(`./fixtures/${filename}`),
})

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename: __filename },
  tests: {
    'supports preload': fixture('preload'),
    'inserts name option for components': fixture('componentName'),
    'inserts name for useVariable': fixture('variableName'),
    'inserts name for useFragment': fixture('fragmentName'),
  },
})
