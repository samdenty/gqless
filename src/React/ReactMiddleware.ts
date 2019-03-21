import {
  getDefaultInterceptor,
  getArrayInterceptor,
  getStringInterceptor,
  getNumberInterceptor,
  getBooleanInterceptor,
  getObjectInterceptor,
  throwException,
} from './utils'
import { QueryMiddleware, QueryMiddlewareArg } from '../QueryMiddleware'
import { createElement } from 'react'

export class ReactMiddleware implements QueryMiddleware {
  constructor(private forceUpdate: Function) {}

  public proxyGetter({
    node,
    prop,
    nodeForProp,
    createNestedProxy,
  }: QueryMiddlewareArg<'proxyGetter'>) {
    const { type } = node.definition

    if (nodeForProp && nodeForProp.definition.type.kind === 'SCALAR') {
      const { value, unresolvedNode } = nodeForProp.resolve()

      // If we can return the actual value, return it
      if (!unresolvedNode) return value

      // We return a proxy to a react element here, which
      // once rendered, will suspend -> causing parent to suspend
      // by doing this, we can detect multiple scalars in one render
      const forceUpdate = () => this.forceUpdate()
      const childElement = createElement(function ScalarPlaceholder() {
        const { unresolvedNode } = nodeForProp.resolve()
        if (unresolvedNode) throwException(unresolvedNode)

        // Force update parent component. With the newly resolved node,
        // this time it will return the actual value
        forceUpdate()

        // We could return the value here, but this component
        // will unmount before the next render
        return null
      })

      return createNestedProxy((_, p) => {
        if (childElement.hasOwnProperty(p)) return childElement[p]
      })
    }

    if (type.kind === 'LIST') {
      // Any path will be trying to access an array property
      const interceptor =
        getDefaultInterceptor(node, prop) || getArrayInterceptor(node, prop)
      if (interceptor) return interceptor
    }

    if (type.kind === 'SCALAR') {
      // Any path will be trying to access a primitive method
      const defaultInterceptor = getDefaultInterceptor(node, prop)
      if (defaultInterceptor) return defaultInterceptor

      if (type.name === 'String' || type.name === 'ID')
        return getStringInterceptor(node, prop)

      if (type.name === 'Int' || type.name === 'Float')
        return getNumberInterceptor(node, prop)

      if (type.name === 'Boolean') return getBooleanInterceptor(node, prop)

      // For custom GraphQL scalar types
      return (
        getStringInterceptor(node, prop) ||
        getNumberInterceptor(node, prop) ||
        getBooleanInterceptor(node, prop)
      )
    }

    if (type.kind === 'OBJECT' && !nodeForProp) {
      const interceptor =
        getDefaultInterceptor(node, prop) || getObjectInterceptor(node, prop)

      if (interceptor) return interceptor
    }
  }

  public onFetched() {
    this.forceUpdate()
  }
}
