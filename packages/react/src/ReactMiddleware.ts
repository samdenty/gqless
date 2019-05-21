import { createElement } from 'react'
import { Middleware } from 'graphql-builder'
import { isRecording, recordSelection } from './recorder'

export class ReactMiddleware implements Middleware {
  constructor() {}

  // public onDataAccessed = (selection => {
  //   if (isRecording) {
  //     recordSelection(selection)
  //   }
  // }) as Middleware['onDataAccessed']

  // public getScalarData = ((selection, value) => {
  //   if (selection.value === undefined) {
  //     if (isRecording) return undefined

  //     // We return a proxy to a react element here, which
  //     // once rendered, will suspend -> causing parent to suspend
  //     // by doing this, we can detect multiple scalars in one render
  //     const forceUpdate = () => this.forceUpdate()
  //     const childElement = createElement(function ScalarPlaceholder() {
  //       const { unresolvedSelection } = selection
  //       if (unresolvedSelection) throw unresolvedSelection

  //       // Force update parent component. With the newly resolved node,
  //       // this time it will return the actual value
  //       forceUpdate()

  //       // We could return the value here, but this component
  //       // will unmount before the next render
  //       return null
  //     })

  //     return new Proxy(value as object, {
  //       get(target, prop) {
  //         if (childElement.hasOwnProperty(prop)) return childElement[prop]

  //         return target[prop]
  //       },
  //     })
  //   }
  // }) as Middleware['getScalarData']
}
