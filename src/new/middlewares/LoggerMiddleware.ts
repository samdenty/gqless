import { print } from 'graphql'
import { Middleware } from '../Middleware'
import { Query } from '../Query'

const format = (...parts: any[][]) => {
  const texts = []
  const styles = []
  for (const [text, style] of parts) {
    texts.push(text)
    styles.push(`font-weight: normal; ${style}`)
  }

  return [`%c${texts.join('%c')}`, ...styles]
}

export class LoggerMiddleware implements Middleware {
  constructor(protected query: Query<any>) {}

  private get header() {
    return [
      ['GraphQL ', 'color: gray; font-weight: lighter'],
      ['query ', 'color: #03A9F4; font-weight: bold'],
      [
        `${this.query.name || '(Unnamed)'} `,
        'font-weight: bold; color: inherit',
      ],
    ].filter(Boolean)
  }

  public onFetched = (({ query, response, selections }) => {
    // @ts-ignore
    console.groupCollapsed(
      ...format(...this.header, [
        `(${selections.length} selections) ${selections
          .map(s => s.toString())
          .join(', ')}`,
        'color: gray',
      ])
    )

    // @ts-ignore
    console.groupCollapsed(...format(['SELECTIONS', 'color: orange']))
    for (const selection of selections) {
      console.log(
        ...format([selection.path.toString(), 'color: lime']),
        selection
      )
    }
    console.groupEnd()

    // console.log(...format(['SELECTIONS', 'color: orange']), selectionsObj)
    console.log(
      ...format(['QUERY ', 'color: orange'], [print(query), 'color: gray'])
    )

    console.log(...format(['RESPONSE', 'color: orange']), response)
    console.groupEnd()
  }) as Middleware['onFetched']
}
