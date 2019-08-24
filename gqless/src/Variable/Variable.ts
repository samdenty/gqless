import { invariant } from '@gqless/utils'

import { UArguments } from '../Node'

export interface IVariableOptions {
  node?: UArguments
  nullable?: boolean
  name?: string
}

export class Variable<TValue = any> {
  public node?: UArguments
  public value?: TValue

  public nullable?: boolean
  public name?: string

  constructor(value?: TValue, public options: IVariableOptions = {}) {
    Object.assign(this, options)

    this.updateValue(value)
  }

  public updateValue(value?: TValue) {
    if (value === this.value) return

    if (value === null) {
      invariant(
        this.nullable !== false,
        `Can't set non-nullable variable of type ${this.node}, to null`
      )
    }

    this.value = value
  }

  public updateNullable(nullable: boolean) {
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

  public validateNode(node: UArguments, nullable?: boolean) {
    if (!this.node) {
      this.node = node
    } else {
      // TODO
      console.warn('validate', node, 'against', this.node)
    }

    if (nullable !== undefined) {
      this.updateNullable(nullable)
    }
  }

  public toJSON() {
    return this.value
  }
}
