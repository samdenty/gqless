import { invariant } from '@gqless/utils'
import { deepJSONEqual, computed } from '../../../utils'
import { Arguments } from '../../Arguments'
import { FieldAccessor } from '../../../Accessor'
import { FieldSelection } from '../../../Selection'
import { EnumNode } from '../../EnumNode'
import { ScalarNode } from '../../ScalarNode'
import { NodeContainer } from '../NodeContainer'
import { FieldsNode } from './FieldsNode'
import { Variable } from '../../../Variable'
import { DataTrait, DataContext, getSelection, interceptAccessor } from '../../traits'

export class FieldNode<TNode extends DataTrait  = DataTrait> extends NodeContainer<TNode> implements DataTrait {
  // This is set inside FieldsNode
  public name: string = ''

  constructor(node: TNode, public args?: Arguments, nullable?: boolean) {
    super(node, nullable)
  }

  @computed()
  public get uncallable() {
    return !(
      this.args &&
      (this.args.required ||
        this.ofNode instanceof ScalarNode ||
        this.ofNode instanceof EnumNode)
    )
  }

  public getSelection(
    ctx: DataContext,
    args?: Record<string, any>
  ): FieldSelection<TNode> {
    interceptAccessor(ctx)

    const parentSelection = getSelection(ctx)

    let selection = parentSelection?.get<FieldSelection<TNode>>(selection => {
      if (!(selection instanceof FieldSelection)) return false

      return (
        selection.field.name === this.name &&
        deepJSONEqual(selection.args, args, (a, b) => {
          // If either is a variable they need to be equal
          if (a instanceof Variable || b instanceof Variable) return a === b

          return undefined
        })
      )
    })

    if (selection) return selection

    selection = new FieldSelection(this, args)
    parentSelection?.add(selection)

    return selection
  }

  public getData(ctx: DataContext<FieldsNode & DataTrait>) {
    const getData = (selection: FieldSelection<TNode>): any => {
      if (ctx.accessor) {
        const accessor =
          ctx.accessor.get(selection) ||
          new FieldAccessor(ctx.accessor, selection)

        return accessor.data
      }

      return this.ofNode.getData({
        selection,
        value: ctx.value?.get(selection.toString()),
        extensions: [] // TODO
      })
    }

    const argsFn = (args: any) => {
      const parsedArgs = args && (Object.keys(args).length ? args : undefined)
      return getData(this.getSelection(ctx, parsedArgs))
    }

    if (!this.uncallable) return argsFn

    let selection: FieldSelection<TNode> | undefined
    let data: any
    const argumentlessData = () => {
      if (selection) return data
      selection = this.getSelection(ctx)
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
