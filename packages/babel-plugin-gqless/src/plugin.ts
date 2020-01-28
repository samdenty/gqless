import jsxSyntax from '@babel/plugin-syntax-jsx'
import { types as t, PluginObj, BabelFileResult } from '@babel/core'
import { reactTransform } from './reactTransform'
import { importReferences } from './utils'
import { gqlessTransform } from './gqlessTransform'
import { Cache, FileAnalysis } from './analysis'

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
      ImportDeclaration(path, state) {
        switch (path.node.source.value) {
          case 'gqless': {
            importReferences(path, (importName, path) => {
              gqlessTransform(state.analysis, importName, path)
            })
            break
          }

          case '@gqless/react': {
            importReferences(path, (importName, path) => {
              reactTransform(importName, path)
            })
            break
          }
        }
      },
    },
  }
}
