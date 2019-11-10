import { Variable } from 'gqless'
import { useEffect } from 'react'
import { useComponentMemo } from './useComponentMemo'

export function useVariable<TValue>(
  value: TValue,
  name?: string
): Variable<TValue>

export function useVariable<TValue>(
  value: TValue,
  nullable?: boolean,
  name?: string
): Variable<TValue>

export function useVariable(value: any, _1?: any, _2?: any) {
  const nullable = typeof _1 === 'boolean' ? _1 : undefined
  const name = _2 !== undefined ? _2 : typeof _1 === 'string' ? _1 : undefined

  // TODO: useMemo
  const variable = useComponentMemo(
    () => new Variable(value, { name, nullable }),
    []
  )

  useEffect(() => {
    if (nullable === undefined) return

    variable.updateNullable$(nullable)
  }, [variable, nullable])

  useEffect(() => {
    variable.updateValue(value)
  }, [variable, value])

  return variable
}
