import { computed } from '../utils'

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
  public formatter = this
  public options: IFormatterOptions

  constructor({
    prettify = __DEV__,
    variables = false,
    fragments = 'inline',
  }: IFormatterOptions = {}) {
    this.options = {
      prettify,
      variables,
      fragments,
    }
  }

  public indent = (string: string) => {
    if (!this.SPACE) return string

    return string.replace(/^/gm, this.SPACE.repeat(2))
  }

  @computed()
  public get SPACE() {
    return this.options.prettify ? ' ' : ''
  }

  @computed()
  public get SEPARATOR() {
    return `,${this.SPACE}`
  }

  @computed()
  public get LINE_SEPARATOR() {
    if (!this.options.prettify) return this.SEPARATOR
    return `\n`
  }

  @computed()
  public get NEWLINE() {
    if (!this.options.prettify) return ''
    return `\n`
  }
}
