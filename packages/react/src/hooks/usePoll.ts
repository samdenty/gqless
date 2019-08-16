import { getAccessor, Poller } from 'gqless'
import { useEffect, useMemo, useRef, useState } from 'react'

export const usePoll = (data: any, interval: number, initialPoll = true) => {
  const accessor = getAccessor(data)
  const [isPolling, setIsPolling] = useState(initialPoll)

  const poller = useMemo(() => new Poller(accessor, interval), [accessor])
  useEffect(() => () => poller.toggle(false), [accessor])

  useEffect(() => {
    poller.updateInterval(interval)
  }, [interval])

  useEffect(() => {
    poller.toggle(isPolling)
  }, [poller, isPolling])

  return [
    isPolling,
    (poll = !isPolling) => {
      setIsPolling(poll)
    },
  ] as const
}
