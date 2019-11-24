import { useFragment } from '@gqless/react'

const A = useFragment(null)
const B = useFragment(null, 'User')
const C = useFragment(null, 'User', 'Test')
