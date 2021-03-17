import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'
import { CoreLayout } from './layout/CoreLayout'
import './scss/App.scss'

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CoreLayout />
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
