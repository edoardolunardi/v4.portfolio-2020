import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "styled-components"

const useMediaQuery = bp => {
  const theme = useContext(ThemeContext)
  const [matches, setMatches] = useState(false) // False during SSR
  const query = `(max-width: ${theme.breakpoints[bp]}px)`

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

export default useMediaQuery
