export class DynImport {
  constructor(
    public source: string,
    /**
     * The name of the import
     * string
     * 'default'
     * null for namespace
     */
    public name: string | null
  ) {}
}
