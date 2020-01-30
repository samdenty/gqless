import { types as t, NodePath } from '@babel/core'
import { evaluate } from './evaluate'

type Key = string | number

export class Record {
  constructor(public keys: RecordKey[] = []) {}

  public has(key: Key) {
    return this.keys.some(rec => rec.key === key)
  }

  public get(key: Key) {
    return this.keys.find(rec => rec.key === key)
  }

  public set(key: Key | undefined, value: NodePath<t.Node | null>) {
    if (key !== undefined && this.has(key)) return

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

  public isArray() {
    return !this.keys.find(k => typeof k.key !== 'number')
  }
}

export class RecordKey {
  constructor(
    public key: Key | undefined,
    public valuePath: NodePath<t.Node | null>,
    public value = valuePath.node && evaluate(valuePath as any)
  ) {}
}
