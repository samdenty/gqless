import { Variable } from 'gqless'
import { useMemo } from 'react'

export const useVariable = () => {
  const variable = useMemo(() => new Variable())

  return variable
}
