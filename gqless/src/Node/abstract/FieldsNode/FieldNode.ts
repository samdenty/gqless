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
import { Outputable } from '../Outputable'
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
  ): FieldSelection<TNode> {
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
    )

    if (selection) return selection

    selection = new FieldSelection(this, args)
    fieldsAccessor.selection.add(selection)

    return selection
  }

  public getData(fieldsAccessor: Accessor<Selection<FieldsNode>>) {
    super.getData(fieldsAccessor)

    const getData = (selection: FieldSelection<TNode>): any => {
      const accessor =
        fieldsAccessor.get(selection) ||
        new FieldAccessor(fieldsAccessor, selection)

      return accessor.data
    }

    const argsFn = (args: any) => {
      const parsedArgs = args && (Object.keys(args).length ? args : undefined)
      return getData(this.getSelection(fieldsAccessor, parsedArgs))
    }

    // If the arguments are required, skip creating an argumentless selection
    if (
      this.args &&
      (this.args.required ||
        this.ofNode instanceof ScalarNode ||
        this.ofNode instanceof EnumNode)
    )
      return argsFn

    let selection: FieldSelection<TNode> | undefined
    let data: any
    const argumentlessData = () => {
      if (selection) return data
      selection = this.getSelection(fieldsAccessor)
      data = getData(selection)
      return data
    }

    if (this.args) {
      return new Proxy(argsFn, {
        get: (_, prop) => {
          const data = argumentlessData()

          invariant(
            data,
            `Cannot read property '${String(
              prop
            )}' on null [${selection}]\n\n` +
              `You should check for null using \`${selection}() && ${selection}().${String(
                prop
              )}\``
          )

          const result = data[prop]

          if (typeof result === 'function') {
            return result.bind(data)
          }

          return result
        },
        set: (_, prop, value) => {
          const data = argumentlessData()

          invariant(
            data,
            `Cannot set property '${String(prop)}' on null [${selection}]\n\n` +
              `You should check for null using \`${selection}() && ${selection}().${String(
                prop
              )}\``
          )

          data[prop] = value

          return true
        },
      })
    }

    return argumentlessData()
  }

  public toString() {
    return this.name
  }
}
