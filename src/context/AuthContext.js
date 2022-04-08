import React, { useContext, useState } from 'react'

export const AuthContext = React.createContext({
  user: undefined,
})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(undefined)

  const valueContext = {
    auth,
  }
  return (
    <AuthContext.Provider value={{ valueContext }}>
      {children}
    </AuthContext.Provider>
  )
}
