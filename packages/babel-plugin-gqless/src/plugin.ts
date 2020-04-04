import jsxSyntax from '@babel/plugin-syntax-jsx'
import { types as t, PluginObj, BabelFileResult, NodePath } from '@babel/core'
import { reactTransform } from './reactTransform'
import { gqlessTransform } from './gqlessTransform'
import { Cache, FileAnalysis } from './analysis'
import { scanImports, ImportCallback } from './scan'

export type State = {
  cwd: string
  file: BabelFileResult
  filename: string

  analysis: FileAnalysis
}

export const plugin = (api: typeof import('@babel/core')): PluginObj<State> => {
  const cache = new Cache(api)

  return {
    name: 'gqless',
    inherits: jsxSyntax,
    pre() {
      const analysis = cache.getPath(this.filename)
      analysis.ast = this.file.ast!
      this.analysis = analysis
    },
    visitor: {
      Program(path, state) {
        scanImports(path, (source): ImportCallback | void => {
          switch (source) {
            case 'gqless':
              return (importName, path) => {
                gqlessTransform(state.analysis, importName, path)
              }

            case '@gqless/react':
              return (importName, path) => {
                reactTransform(importName, path)
              }
          }
        })
      },
    },
  }
}
