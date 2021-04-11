import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'
import { CoreLayout } from './layout/CoreLayout'
import './scss/app.scss'

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CoreLayout />
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
