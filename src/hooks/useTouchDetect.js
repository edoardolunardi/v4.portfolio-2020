import { useState, useEffect } from "react"
import debounce from "lodash/debounce"

const useTouchDetect = () => {
  const [isTouch, setIsTouch] = useState(false) // false during SSR

  useEffect(() => {
    const handleResize = () => {
      const t =
        !!(
          typeof window !== "undefined" &&
          ("ontouchstart" in window ||
            (window.DocumentTouch &&
              typeof document !== "undefined" &&
              document instanceof window.DocumentTouch))
        ) ||
        !!(
          typeof navigator !== "undefined" &&
          (navigator.maxTouchPoints || navigator.msMaxTouchPoints)
        )
      setIsTouch(t)
    }

    handleResize()

    window.addEventListener("resize", debounce(handleResize, 150))
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isTouch
}

export default useTouchDetect
