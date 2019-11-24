import { declare } from '@babel/helper-plugin-utils'
import jsxSyntax from '@babel/plugin-syntax-jsx'
import { types as t, PluginObj } from '@babel/core'
import { reactTransform } from './reactTransform'
import { importReferences } from './utils'
import { gqlessTransform } from './gqlessTransform'

export type State = {
  cwd: string
  filename: string
}

const plugin = declare(
  (api): PluginObj<State> => {
    return {
      name: 'gqless',
      inherits: jsxSyntax,
      visitor: {
        ImportDeclaration(path, state) {
          switch (path.node.source.value) {
            case 'gqless': {
              importReferences(path, ({ importName, node, path }) => {
                gqlessTransform(state.filename, importName, node, path.scope)
              })
              break
            }

            case '@gqless/react': {
              importReferences(path, ({ importName, node, isNamespace }) => {
                reactTransform(
                  importName,
                  node,
                  isNamespace ? path.parentPath.parent : path.parent
                )
              })
              break
            }
          }
        },
        Identifier(path, state) {
          // if (path.node.name === 'query') {
          //   console.log(path.scope.getBinding)
          // }
          // // if (path.node.name === )
          // console.log(path.node.name)
        },
      },
    }
  }
)
// module.exports = plugin
export default plugin
