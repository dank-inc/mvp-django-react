import { message } from 'antd'
import axios from 'axios'
import { User } from '../types'
import { mockUser } from './data'
import { JWT, getJWT, setHeaders, setJWT, wipeJWT } from '../utils/jwt'

const dev = process.env.NODE_ENV === 'development'

export const logIn = async (username: string, password: string) => {
  // if (dev) return mockUser

  try {
    const { data: jwt } = await axios.post<JWT>(`/api/dj-rest-auth/login/`, {
      username,
      password,
    })

    setJWT(jwt)

    const user = await getLoggedInUser()
    return user
  } catch (err) {
    console.log(err)
    message.error('Error logging in!')
  }
}

export const logOut = () => {
  wipeJWT()
  // axios -> delete session?
}

export const getLoggedInUser = async () => {
  if (dev) return mockUser

  const jwt = getJWT()
  if (!jwt) throw new Error('User not logged in') // TODO: decorator

  const { data } = await axios.get<User>(`/users/${jwt.id}`, setHeaders())
  return data
}
