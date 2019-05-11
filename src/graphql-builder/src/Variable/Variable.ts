import { Node } from '../Node'

export class Variable {
  public value: any
  public nullable?: boolean
  public type?: Node<any>

  public toJSON() {}
}
