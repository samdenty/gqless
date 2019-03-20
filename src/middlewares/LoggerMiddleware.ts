import { print } from 'graphql'
import { QueryMiddleware } from '../QueryMiddleware'
import { Query } from '../Query'

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never

const format = (...parts: any[][]) => {
  const texts = []
  const styles = []
  for (const [text, style] of parts) {
    texts.push(text)
    styles.push(`font-weight: normal; ${style}`)
  }

  return [`%c${texts.join('%c')}`, ...styles]
}

export class LoggerMiddleware implements QueryMiddleware {
  constructor(private query: Query) {}

  private get header() {
    return [
      ['GraphQL ', 'color: gray; font-weight: lighter'],
      ['query ', 'color: #03A9F4; font-weight: bold'],
      [
        `${this.query.options.queryName || '(Unnamed)'} `,
        'font-weight: bold; color: inherit',
      ],
    ].filter(Boolean)
  }

  public onFetch({
    query,
    nodes,
  }: ArgumentTypes<QueryMiddleware['onFetch']>[0]) {
    // @ts-ignore
    console.groupCollapsed(
      ...format(...this.header, [
        `(${nodes.length} nodes) ${nodes.map(n => n.name).join(', ')}`,
        'color: gray',
      ])
    )
    console.log(...format(['NODES', 'color: orange']), nodes)
    console.log(
      ...format(['QUERY ', 'color: orange'], [print(query), 'color: gray'])
    )
  }

  public onFetched({
    response,
  }: ArgumentTypes<QueryMiddleware['onFetched']>[0]) {
    console.log(...format(['RESPONSE', 'color: orange']), response)
    console.groupEnd()
  }
}
