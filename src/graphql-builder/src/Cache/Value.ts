import { Node } from '../Node'
import { onEvent } from '../utils'

export type UValueData =
  | string
  | number
  | boolean
  | { [key: string]: Value }
  | Value[]
  | null

export class Value {
  constructor(public node: Node<any>, public data?: UValueData) {}

  public onSet = onEvent<(key: string | number, value: Value) => void>()
  public onUpdate = onEvent<() => void>()

  public update(data: UValueData) {
    this.data = data
    this.onUpdate.emit()
  }

  public get(key: string | number): Value | undefined {
    if (this.data && typeof this.data === 'object') {
      if (this.data.hasOwnProperty(key)) {
        return this.data[key]
      }
    }

    return undefined
  }

  public set(key: string | number, value: Value) {
    this.data[key] = value
    this.onSet.emit(key, value)
  }
}

// if (false) {
//   const QueryA = new Value({
//     me: new Ref(`User:bob`),
//     'users({limit:10})': new Value([
//       new Ref(`User:bob`),
//       new Value({ name: new Value('tom') }),
//     ]),
//     'users({limit:1})': new Value([new Ref(`User:bob`)]),
//   })

//   const UserBob = new Value({
//     name: new Value('bob'),
//     following: new Value([new Ref(`User:bob`)]),
//   })

//   // Change the me from a refrence to a null value
//   QueryA.set('me', new Value(null))

//   // Update the User:bob refrence value to null
//   QueryA.get('me')!.update(null)

//   // Update the User:bob name
//   QueryA.get('users({limit:10})')!
//     .get(0)!
//     .get('name')!
//     .update('timmy')

//   QueryA.set('me', new Ref('User:bob'))
// }
