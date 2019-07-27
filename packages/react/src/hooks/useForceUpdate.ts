import { useState, useRef, useEffect } from 'react'

export const useForceUpdate = () => {
  const [_, setRerenders] = useState(0)
  const timerRef = useRef<number>()

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])

  return () => {
    if (timerRef.current) return

    timerRef.current = setTimeout(() => {
      setRerenders(r => r + 1)
      timerRef.current = undefined
    })
  }
}
