import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "styled-components"

/* 
    useMedia will be used to detect breakpoint it one is passed,
    otherwise will be used to detect prefers-color-scheme
*/

const useMedia = bp => {
  const theme = useContext(ThemeContext)
  const [matches, setMatches] = useState(false) // False during SSR
  const query = bp
    ? `(max-width: ${theme.breakpoints[bp]}px)`
    : "(prefers-color-scheme: dark)"

  useEffect(() => {
    setMatches(matchMedia(query).matches)
    const mediaQueryList = matchMedia(query)
    const onChange = e => {
      setMatches(e.matches)
    }
    mediaQueryList.addListener(onChange)
    return () => mediaQueryList.removeListener(onChange)
  }, [query])

  return matches
}

export default useMedia
