import { print } from 'graphql/language/printer'
import {
  Query,
  QueryResponse,
  Middleware,
  MiddlewareMethod,
} from 'graphql-builder'

const format = (...parts: any[][]) => {
  const texts = []
  const styles = []
  for (const [text, style] of parts.filter(Boolean)) {
    texts.push(text)
    styles.push(`font-weight: normal; ${style}`)
  }

  return [`%c${texts.join('%c')}`, ...styles]
}

export class LoggerMiddleware implements Middleware {
  constructor(protected query: Query<any>) {}

  public onFetch = (async (query, responsePromise, selections) => {
    const start = Date.now()

    let response: QueryResponse | undefined = undefined
    let error: any = undefined
    try {
      response = await responsePromise
    } catch (e) {
      error = e
    }

    const time = Date.now() - start

    console.groupCollapsed(
      ...format(
        ['GraphQL ', 'color: gray; font-weight: lighter'],
        ['query ', `color: ${error ? 'red' : '#03A9F4'}; font-weight: bold`],
        // [`${'(Unnamed)'} `, 'font-weight: bold; color: inherit'],

        [`(${time}ms)`, 'color: gray'],
        [` ${selections.length} selections`, 'color: gray'],

        error && [
          'FAILED 🚫',
          'margin-left: 10px; border-radius: 2px; padding: 2px 6px; background: #e84343; color: white',
        ]
      )
    )

    const headerStyles = `font-weight: bold; color: #f316c1`

    // Query
    console.group(
      ...format(
        ['Query ', headerStyles],
        ['  ', `background-image: url(https://graphql.org/img/logo.svg)`]
      )
    )
    console.log(...format([print(query), 'color: gray']))
    console.groupEnd()

    // Result
    if (error) {
      console.error(error)
    } else {
      console.log(...format(['Result', headerStyles]), response)
    }

    // Selections
    console.groupCollapsed(...format(['Selections', headerStyles]))
    for (const selection of selections) {
      console.groupCollapsed(...format([selection.path.toString(), '']))
      console.log(selection)
      console.groupEnd()
    }
    console.groupEnd()

    // Cache
    console.log(
      ...format(['Cache snapshot', headerStyles]),
      this.query.cache.toJSON()
    )

    console.groupEnd()
  }) as MiddlewareMethod<'onFetch'>
}
