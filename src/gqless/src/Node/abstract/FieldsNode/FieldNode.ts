import { Node, NodeDataType } from '../Node'
import { NodeContainer } from '../NodeContainer'
import { FieldSelection, Selection } from '../../../Selection'
import { Arguments } from '../..'
import { Accessor, FieldAccessor } from '../../../Accessor'
import isEqual from 'fast-deep-equal'
import { Outputable } from '../Outputable'
import { FieldsNode } from './FieldsNode'
import { invariant } from '@gqless/utils'
import { Mix, Generic } from 'mix-classes'

export interface FieldNode<
  TNode extends Node<any>,
  TArguments extends Arguments<any, any> = Arguments<any, any>,
  TNullable extends boolean = false
> extends NodeContainer<TNode, TNullable> {}
export class FieldNode<TNode, TArguments, TNullable> extends Mix(
  Generic(NodeContainer),
  Outputable
) {
  // This is set inside FieldsNode
  public name: string = ''

  constructor(node: TNode, public args?: TArguments, nullable?: TNullable) {
    super([node, nullable])
  }

  public getData(
    fieldsAccessor: Accessor<Selection<FieldsNode<any, any, any>>>
  ) {
    super.getData(fieldsAccessor)

    const getSelection = (args?: Record<string, any>) => {
      const selection = fieldsAccessor.selection.getField(selection => {
        if (!(selection instanceof FieldSelection)) return false

        return (
          selection.field.name === this.name && isEqual(selection.args, args)
        )
      })! as FieldSelection<TNode>

      if (selection) return { justCreated: false, selection }

      return {
        justCreated: true,
        selection: new FieldSelection(
          fieldsAccessor.selection,
          this.ofNode,
          this,
          args
        ),
      }
    }

    const getData = (selection: FieldSelection<TNode>): any => {
      const accessor =
        fieldsAccessor.getChild(a => a.selection === selection) ||
        new FieldAccessor(fieldsAccessor, selection)

      return this.ofNode instanceof Outputable
        ? this.ofNode.getData(accessor)
        : undefined
    }
    const argumentless = getSelection()
    const argumentlessData = getData(argumentless.selection)

    if (this.args) {
      // Return a proxy to a function
      return new Proxy(
        (args: NodeDataType<TArguments> | undefined) => {
          if (!args) args = undefined

          // If we just created the argumentless selection
          // + it didn't already exist then destroy it, as it's not required
          if (args && argumentless.justCreated) {
            argumentless.selection.unselect()
          }

          const { selection } = getSelection(args)
          return getData(selection)
        },
        {
          get: (_, prop) => {
            invariant(
              argumentlessData,
              `Cannot read property '${String(prop)}' on null [${
                argumentless.selection.path
              }]\n\n` +
                `You should check for null using \`${
                  argumentless.selection
                }() && ${argumentless.selection}().${String(prop)}\``
            )

            const result = argumentlessData[prop]

            if (typeof result === 'function') {
              return result.bind(argumentlessData)
            }

            return result
          },
          set: (_, prop, value) => {
            invariant(
              argumentlessData,
              `Cannot set property '${String(prop)}' on null [${
                argumentless.selection.path
              }]\n\n` +
                `You should check for null using \`${
                  argumentless.selection
                }() && ${argumentless.selection}().${String(prop)}\``
            )

            return (argumentlessData[prop] = value)
          },
        }
      )
    }

    return argumentlessData
  }
}
