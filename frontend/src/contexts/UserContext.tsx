import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import { message } from 'antd'

import { useHistory } from 'react-router'

import { User } from '../types'
import { getLoggedInUser, logIn, logOut } from '../api'
import axios from 'axios'

type Props = {
  children: React.ReactNode
}

type Context = {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
  handleLogin: (username: string, password: string) => void
  handleLogout: () => void
}

const UserContext = createContext<Context | null>(null)

export const UserContextProvider = ({ children }: Props) => {
  const history = useHistory()

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const login = async () => {
      try {
        // const res = axios.post('/dj-rest-auth/login', {
        //   email: 'blah',
        //   password: 'blah',
        // })
        const user = await getLoggedInUser()
        if (!user) throw new Error()
        setUser(user)

        message.success(`logged in as ${user?.username}`, 0.5)
      } catch {
        // this can possibly be handled better
        message.error('Login Failed')
        window.location.reload()
      }
    }

    login()
  }, [])

  const handleLogin = async (username: string, password: string) => {
    try {
      const user = await logIn(username, password)
      if (!user) throw new Error('Problem logging in!')
      setUser(user)
      message.success(`logged in as ${user?.username}`, 0.5)
    } catch (err) {
      message.error('Login Failed!')
    }
  }

  const handleLogout = async () => {
    await logOut()
    setUser(null)
    message.success('logged out!', 0.5)
    history.push('/')
  }

  return (
    <UserContext.Provider value={{ user, setUser, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context)
    throw new Error(
      'UserContext must be called from within the UserContextProvider',
    )

  return context
}
