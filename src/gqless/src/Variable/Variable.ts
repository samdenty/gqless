import { Node, UArguments } from '../Node'
import { invariant } from '@gqless/utils'

export interface IVariableOptions {
  node?: UArguments
  nullable?: boolean
  name?: string
}

export class Variable {
  public node?: UArguments
  public nullable?: boolean
  public name?: string

  constructor(public value?: any, public options: IVariableOptions = {}) {
    Object.assign(this, options)
  }

  public validateNode(node: UArguments, nullable?: boolean) {
    if (!this.node) {
      this.node = node
    } else {
      console.warn('validate', node, 'against', this.node)
    }

    if (nullable !== undefined) {
      if (this.nullable === true && !nullable) {
        invariant(
          false,
          `Can't convert a nullable variable of type ${
            this.node
          }, to non-nullable`
        )
      }

      if (this.nullable !== false) {
        this.nullable = nullable
      }
    }
  }

  public toJSON() {
    return this.value
  }
}
