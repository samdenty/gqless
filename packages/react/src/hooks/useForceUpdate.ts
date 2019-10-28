import { useState, useRef, useEffect } from 'react'
import { afterTransaction } from 'gqless'

export const useForceUpdate = () => {
  const [_, setRerenders] = useState(0)
  const timerRef = useRef<{ rendered: boolean; timer: any; }>()
  const mountedRef = useRef<boolean>(true)

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current?.timer)
      mountedRef.current = false
    }
  }, [])

  return (callback?: Function) => afterTransaction(() => {
    if (!mountedRef.current) return

    const setRef = () => {
      timerRef.current = { rendered: false, timer: setTimeout(() => {
        timerRef.current = undefined
      })}
    }

    if (!timerRef.current) setRef()
    if (timerRef.current!.rendered) return

    timerRef.current!.rendered = true
    setRerenders(r => r + 1)
    callback?.()
  })
}
