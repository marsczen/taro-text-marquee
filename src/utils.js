import { useCallback, useEffect, useRef } from 'react'

const isNumber = (value) => typeof value === 'number'

function useLatest(value) {
  const ref = useRef(value)
  ref.current = value

  return ref
}

export function useInterval() {
  const immediate = options?.immediate

  const fnRef = useLatest(fn)

  const timerRef = useRef<number | NodeJS.Timer>()

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) return

    if (immediate) {
      fnRef.current()
    }
    timerRef.current = setInterval(() => {
      fnRef.current()
    }, delay)
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [delay])

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }, [])

  return clear
}

export default useInterval
