export class Query {
  static instances = new Map<string | undefined, Query>()

  constructor(
    public name?: string,
    /**
     * By default, queries with the same name
     * will refer to the same query.
     * Set this to true to disable
     */
    unique?: boolean
  ) {
    if (Query.instances.has(name)) {
      if (!unique) return Query.instances.get(name)!
    } else {
      Query.instances.set(name, this)
    }
  }

  public toString() {
    return this.name || '(unnamed)'
  }
}
