import { useState, useEffect } from "react"

const usePrefersDark = () => {
  const [dark, setDark] = useState(null) // null during ssr
  const query = "(prefers-color-scheme: dark)"

  useEffect(() => {
    setDark(matchMedia(query).matches)
    const mediaQueryList = matchMedia(query)
    const onChange = e => {
      setDark(e.matches)
    }
    mediaQueryList.addListener(onChange)
    return () => mediaQueryList.removeListener(onChange)
  }, [query])

  return dark
}

export default usePrefersDark
