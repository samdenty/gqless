export interface IFormatterOptions {
  prettify?: boolean

  /**
   * Whether or not to output variables.
   * If set to false, variable values will be resolved
   */
  variables?: boolean
}

export class Formatter {
  public options: IFormatterOptions

  constructor(options?: IFormatterOptions) {
    this.options = {
      prettify: true,
      variables: true,
      ...options,
    }
  }

  public get SPACE() {
    return this.options.prettify ? ' ' : ''
  }

  public get SEPARATOR() {
    return `,${this.SPACE}`
  }
}
