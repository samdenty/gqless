export class Query {
  static instances = new Map<string | undefined, Query>()

  constructor(public name?: string, public isGlobal = true) {
    if (Query.instances.has(name)) {
      if (isGlobal) return Query.instances.get(name)!
    } else {
      Query.instances.set(name, this)
    }
  }
}
