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
  public formatter$ = this
  public options$: Required<IFormatterOptions>

  public SPACE$: string
  public SEPARATOR$: string
  public LINE_SEPARATOR$: string
  public NEWLINE$: string

  constructor({
    prettify = __DEV__,
    variables = false,
    fragments = 'inline',
  }: IFormatterOptions = {}) {
    this.options$ = {
      prettify,
      variables,
      fragments,
    }
    this.SPACE$ = prettify ? ' ' : ''
    this.SEPARATOR$ = `,${this.SPACE$}`
    this.LINE_SEPARATOR$ = prettify ? `\n` : this.SEPARATOR$
    this.NEWLINE$ = prettify ? '\n' : ''
  }

  public indent$ = (string: string) => {
    if (!this.SPACE$) return string

    return string.replace(/^/gm, this.SPACE$.repeat(2))
  }

  public hug$ = (string: string) => {
    return `{${this.NEWLINE$}${string}${this.NEWLINE$}}`
  }
}
