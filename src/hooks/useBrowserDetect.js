import { useEffect, useState } from "react"
import { isChrome, isFirefox, isSafari } from "react-device-detect"

const useBrowserDetect = () => {
  const [isValidBrowser, setIsValidBrowser] = useState(true) // during SSR, let's assume the browser is correct
  useEffect(() => {
    setIsValidBrowser(isChrome || isFirefox || isFirefox)
  }, [])

  return { isValidBrowser }
}

export default useBrowserDetect
