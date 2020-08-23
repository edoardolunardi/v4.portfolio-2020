import React, { createContext, useState } from "react"

const defaultState = {
  firstOpen: true,
  setFirstOpen: () => {},
}

const AppContext = createContext(defaultState)

const AppProvider = ({ children }) => {
  const [firstOpen, setFirstOpen] = useState(true)

  return (
    <AppContext.Provider
      value={{
        firstOpen,
        setFirstOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext

export { AppProvider }
