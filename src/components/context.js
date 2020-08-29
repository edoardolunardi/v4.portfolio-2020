import React, { createContext, useState, useEffect } from "react"
import useMedia from "../hooks/useMedia"

const defaultState = {
  showLoader: true,
  setShowLoader: () => {},
  theme: null,
  setTheme: () => {},
}

const AppContext = createContext(defaultState)

const AppProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true)
  const [theme, setTheme] = useState(null)
  const prefersDark = useMedia()

  useEffect(() => {
    setTheme(prefersDark ? "dark" : "light")
  }, [prefersDark])

  return (
    <AppContext.Provider
      value={{
        showLoader,
        setShowLoader,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext

export { AppProvider }
