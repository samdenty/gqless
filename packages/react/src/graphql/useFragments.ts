import { VariantFragments } from '../hooks/useComponentContext'
import { Accessor, Fragment, FragmentAccessor, NetworkStatus } from 'gqless'
import { createContext, useContext } from 'react'

export type Variant = [Accessor, Fragment][]
export const VariantContext = createContext<Variant>([])

export const useFragments = () => {
  const variant = useContext(VariantContext)
  const variantFragments: VariantFragments = new Map()

  const stopResolving: Function[] = []

  return {
    variantFragments,
    startResolving() {
      variant.forEach(([accessor, fragment]) => {
        const fragmentAccessor =
          accessor._get<FragmentAccessor>(a => a._selection === fragment) ||
          new FragmentAccessor(accessor, fragment)

        stopResolving.push(fragmentAccessor.startResolving())
      })
    },
    stopResolving() {
      stopResolving.forEach(stop => stop())
    },
    getRenderVariants() {
      let variants: Variant[] = []

      variantFragments.forEach((fragments, accessor) => {
        // Only render variations for accessors
        // without a value and non-idle
        if (accessor._value || accessor._status === NetworkStatus.idle) return

        if (!variants.length) {
          fragments.forEach(fragment => variants.push([[accessor, fragment]]))
          return
        }

        const newVariants: typeof variants = []
        fragments.forEach(fragment => {
          for (let i = 0; i < variants.length; i++) {
            const variant = variants[i]
            newVariants.push([...variant, [accessor, fragment]])
          }
        })
        variants = newVariants
      })

      return variants
    },
  }
}
