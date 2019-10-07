import { invariant } from '@gqless/utils'
import { Generic, Mix } from 'mix-classes'

import { deepJSONEqual } from '../../../utils'
import { Arguments } from '../../Arguments'
import { Accessor, FieldAccessor } from '../../../Accessor'
import { FieldSelection, Selection } from '../../../Selection'
import { EnumNode } from '../../EnumNode'
import { ScalarNode } from '../../ScalarNode'
import { Node } from '../Node'
import { NodeContainer } from '../NodeContainer'
import { Outputable, resolveData } from '../Outputable'
import { FieldsNode } from './FieldsNode'
import { Variable } from '../../../Variable'

export interface FieldNode<TNode extends Node & Outputable = any>
  extends NodeContainer<TNode> {}

export class FieldNode<TNode> extends Mix(Generic(NodeContainer), Outputable) {
  // This is set inside FieldsNode
  public name: string = ''

  constructor(node: TNode, public args?: Arguments, nullable?: boolean) {
    super([node, nullable], [])
  }

  public getSelection(
    fieldsAccessor: Accessor,
    args?: Record<string, any>
  ): { justCreated: boolean; selection: FieldSelection<TNode> } {
    let selection = fieldsAccessor.selection.get<FieldSelection<TNode>>(
      selection => {
        if (!(selection instanceof FieldSelection)) return false

        return (
          selection.field.name === this.name &&
          deepJSONEqual(selection.args, args, (a, b) => {
            // If either is a variable they need to be equal
            if (a instanceof Variable || b instanceof Variable) return a === b

            return undefined
          })
        )
      }
    )!

    if (selection) return { justCreated: false, selection }

    selection = new FieldSelection(this, args)
    fieldsAccessor.selection.add(selection)

    return { justCreated: true, selection }
  }

  public getData(fieldsAccessor: Accessor<Selection<FieldsNode>>) {
    super.getData(fieldsAccessor)

    const getData = (selection: FieldSelection<TNode>): any => {
      const accessor =
        fieldsAccessor.get(a => a.selection === selection) ||
        new FieldAccessor(fieldsAccessor, selection)

      return resolveData(this.ofNode, accessor)
    }

    const createArgsFn = (handler?: (args: any) => void) => (args: any) => {
      const parsedArgs = args && Object.keys(args).length ? args : undefined

      handler && handler(parsedArgs)

      return getData(this.getSelection(fieldsAccessor, parsedArgs).selection)
    }

    // If the arguments are required, skip creating an argumentless selection
    if (
      this.args &&
      (this.args.required ||
        this.ofNode instanceof ScalarNode ||
        this.ofNode instanceof EnumNode)
    ) {
      return createArgsFn()
    }

    // Create an argumentless selection, that will be destroyed if
    // the callback function is called
    const argumentless = this.getSelection(fieldsAccessor)
    const argumentlessData = getData(argumentless.selection)

    if (this.args)
      return new Proxy(
        createArgsFn(args => {
          // If we just created the argumentless selection
          // + it didn't already exist then destroy it, as it's not required
          if (args && argumentless.justCreated) {
            fieldsAccessor.selection.delete(argumentless.selection)
          }
        }),
        {
          get: (_, prop) => {
            invariant(
              argumentlessData,
              `Cannot read property '${String(prop)}' on null [${
                argumentless.selection
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
                argumentless.selection
              }]\n\n` +
                `You should check for null using \`${
                  argumentless.selection
                }() && ${argumentless.selection}().${String(prop)}\``
            )

            return (argumentlessData[prop] = value)
          },
        }
      )

    return argumentlessData
  }
}
