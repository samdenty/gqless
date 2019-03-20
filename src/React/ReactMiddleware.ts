import {
  getDefaultInterceptor,
  getArrayInterceptor,
  getStringInterceptor,
  getNumberInterceptor,
  getBooleanInterceptor,
  getObjectInterceptor,
  throwException,
} from './utils'
import { QueryMiddleware } from '../QueryMiddleware'
import { QueryNode } from '../QueryNode'
import { createElement } from 'react'
import { Node, ProxyInterceptor } from '../Query'

export class ReactMiddleware implements QueryMiddleware {
  constructor(private forceUpdate: Function) {}

  public proxyGetter(
    node: QueryNode,
    prop: string | symbol,
    createNestedProxy: (interceptor?: ProxyInterceptor) => Node
  ) {
    const { value, unresolvedNode } = node.resolve()
    const { type, schemaType } = node.definition

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

    if (type.kind === 'OBJECT') {
      // We should check whether the path exists on the.schemaType
      // If it doesn't then it's trying to access property
      const validSelection =
        typeof prop === 'string' && schemaType.fields.hasOwnProperty(prop)

      if (validSelection) {
        const field = schemaType.fields[prop as string]

        if (field.type.kind === 'SCALAR') {
          // If we can return the actual value, return it
          if (!unresolvedNode && value[prop] !== undefined) return value[prop]

          // We return a proxy to a react element here, which
          // once rendered, will suspend -> causing parent to suspend
          // by doing this, we can detect multiple scalars in one render
          const forceUpdate = () => this.forceUpdate()
          const childElement = createElement(function ScalarPlaceholder() {
            const { unresolvedNode } = node.resolve()
            if (unresolvedNode) throwException(unresolvedNode)

            // Force update parent component. With the newly resolved node,
            // this time it will return the actual value
            forceUpdate()

            // We could return the value here, but this component
            // will unmount before the next render
            return null
          })

          return createNestedProxy((_, p) => {
            if (p in childElement) return childElement[p]
          })
        }
      }

      if (!validSelection) {
        const interceptor =
          getDefaultInterceptor(node, prop) || getObjectInterceptor(node, prop)

        if (interceptor) return interceptor
      }
    }
  }

  public onFetched() {
    this.forceUpdate()
  }
}
