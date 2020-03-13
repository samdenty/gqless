import { types as t, NodePath } from '@babel/core'
import { evaluate } from './evaluate'

type Key = string | number

export class Record {
  constructor(public isArray = false, public keys: RecordKey[] = []) {}

  public has(key: Key) {
    return this.keys.some(k => k.key === key)
  }

  public get(key: Key) {
    return this.keys.find(k => k.key === key)
  }

  public set(key: Key | undefined, value: NodePath<t.Node | null>) {
    if (key !== undefined) {
      const i = this.keys.findIndex(k => k.key === key)
      if (i > -1) {
        if (this.keys[i].valuePath === value) return

        this.keys[i] = new RecordKey(key, value)
        return
      }
    }

    this.keys.push(new RecordKey(key, value))
  }

  public delete(key: Key) {
    for (let i = 0; i < this.keys.length; i++) {
      const k = this.keys[i]

      if (k.key === key) {
        this.keys.splice(i, 1)
        return
      }
    }
  }
}

export class RecordKey {
  constructor(
    public key: Key | undefined,
    public valuePath: NodePath<t.Node | null>,
    public value = valuePath.node && evaluate(valuePath as any)
  ) {}
}
