import * as formatters from './formatters'

if (typeof window !== 'undefined') {
  if (!(window as any).devtoolsFormatters)
    (window as any).devtoolsFormatters = []

    // Inject
  ;(window as any).devtoolsFormatters.push(
    ...Object.values(formatters).filter(f => typeof f === 'object')
  )
}
