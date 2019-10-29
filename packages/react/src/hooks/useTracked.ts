import { useComponentContext } from './useComponentContext'

export const useTracked = () => {
  const { stack, schedulers } = useComponentContext()

  return <T>(callback: () => T): T => {
    try {
      schedulers.forEach(s => s.pushStack(...stack.frames))
      return callback()
    } finally {
      schedulers.forEach(s => s.popStack(...stack.frames))
    }
  }
}
