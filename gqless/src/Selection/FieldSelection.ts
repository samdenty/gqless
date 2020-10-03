import { buildArguments, Formatter } from '../QueryBuilder'
import { Selection } from './Selection'
import { InputFields } from '../schema'
import { Type } from '../Type'

const argsFormatter = new Formatter({ prettify: false, variables: false })

export class FieldSelection extends Selection {
  constructor(
    public name: string,
    type: Type,
    public argsType?: InputFields,
    public readonly args?: Record<string, any>
  ) {
    super(type)
  }

  public toString() {
    const args = this.args
      ? `(${buildArguments(argsFormatter, this.args, {
          node: this.field.args!,
        })})`
      : ''

    return this.name + args
  }
}
