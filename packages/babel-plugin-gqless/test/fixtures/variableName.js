import { useVariable } from '@gqless/react'

const A = useVariable('')
const B = useVariable('', 'Test')

const C = useVariable('', false)
const D = useVariable('', false, 'Test')
