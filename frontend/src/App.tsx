import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'
import { CoreLayout } from './app/CoreLayout'
import { AppContextProvider } from './contexts/AppContext'
import { Api } from './api'
import { users } from './api/data/users'

import './scss/app.scss'

const App = () => {
  const api = new Api({ mock: true, users })

  return (
    <BrowserRouter>
      <AppContextProvider api={api}>
        <UserContextProvider>
          <CoreLayout />
        </UserContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
