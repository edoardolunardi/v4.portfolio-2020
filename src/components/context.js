import React, { createContext, useState } from "react"

const defaultState = {
  showLoader: true,
  setShowLoader: () => {},
}

const AppContext = createContext(defaultState)

const AppProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true)

  return (
    <AppContext.Provider
      value={{
        showLoader,
        setShowLoader,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext

export { AppProvider }
