import { observable } from 'mobx'
import { Type } from './Type'

export class Field {
  @observable public active = false

  constructor(
    public parent: ObjectType,
    public type: Type,
    public name: string,
    public nullable: boolean
  ) {}
}

export class ObjectType extends Type {
  public fields: Map<string, Field>

  constructor(name: string, fields: Record<string, string>) {
    super(name)

    this.fields = new Map(
      Object.entries(fields).map(([key, field]) => [
        key,
        new Field(this, undefined!, key, true),
      ])
    )
  }
}
