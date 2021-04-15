import React, { createContext, useContext } from 'react'
import { Api } from '../api'

type Props = {
  children: React.ReactNode
  api: Api
}
type Context = {
  api: Api
}

// Just find-replace "AppContext" with whatever context name you like. (ie. DankContext)
const AppContext = createContext<Context | null>(null)

export const AppContextProvider = ({ api, children }: Props) => {
  return <AppContext.Provider value={{ api }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context)
    throw new Error(
      'AppContext must be called from within the AppContextProvider',
    )

  return context
}
