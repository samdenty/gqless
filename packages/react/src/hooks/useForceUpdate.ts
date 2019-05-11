import { useState } from 'react'

export const useForceUpdate = () => {
  const [_, setRerenders] = useState(0)

  return () => {
    setRerenders(r => r + 1)
  }
}
