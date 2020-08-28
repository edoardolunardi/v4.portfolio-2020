import React, { createContext, useState } from "react"

const defaultState = {
  showLoader: true,
  setShowLoader: () => {},
  theme: "light",
  setTheme: () => {},
}

const AppContext = createContext(defaultState)

const AppProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true)
  const [theme, setTheme] = useState("light")

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
