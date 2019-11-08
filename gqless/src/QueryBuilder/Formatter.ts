export interface IFormatterOptions {
  /**
   * Makes the query human readable
   * @default process.env.NODE_ENV === 'development'
   */
  prettify?: boolean

  /**
   * Output GraphQL variables references.
   * If set to false, variable values will be inlined
   * @default false
   */
  variables?: boolean

  /**
   * Whether or not to extract fragments into a shared definition
   * inline: all fragments will be inlined
   * auto: all fragments will be inlined, unless duplicated
   * @default inline
   */
  fragments?: 'auto' | 'inline'
}

export class Formatter {
  public _formatter = this
  public _options: Required<IFormatterOptions>

  public _SPACE: string
  public _SEPARATOR: string
  public _LINE_SEPARATOR: string
  public _NEWLINE: string

  constructor({
    prettify = __DEV__,
    variables = false,
    fragments = 'inline',
  }: IFormatterOptions = {}) {
    this._options = {
      prettify,
      variables,
      fragments,
    }
    this._SPACE = prettify ? ' ' : ''
    this._SEPARATOR = `,${this._SPACE}`
    this._LINE_SEPARATOR = prettify ? this._SEPARATOR : `\n`
    this._NEWLINE = prettify ? '' : '\n'
  }

  public _indent = (string: string) => {
    if (!this._SPACE) return string

    return string.replace(/^/gm, this._SPACE.repeat(2))
  }

  public _hug = (string: string) => {
    return `{${this._NEWLINE}${string}${this._NEWLINE}}`
  }
}
