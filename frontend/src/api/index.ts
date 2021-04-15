import Axios, { AxiosInstance } from 'axios'
import { User } from '../types'
import { JWT, setJWT, wipeJWT } from '../utils/jwt'
import { DataBuddy } from '@dank-inc/data-buddy'

export type ApiParams = {
  baseURL?: string
  mock?: boolean
  users: DataBuddy<User>
}

export interface Api {
  mock?: boolean
  users: DataBuddy<User>
  axios: AxiosInstance
}

export class Api {
  constructor({ mock, users, baseURL }: ApiParams) {
    this.mock = mock
    this.users = users
    this.axios = Axios.create({ baseURL })
  }

  login = async (username: string, password: string): Promise<JWT> => {
    if (this.mock)
      return {
        id: 'mock-id',
        token: 'token-token-token',
        exp: +new Date(),
      }

    const { data } = await this.axios.post<JWT>(`/api/dj-rest-auth/login/`, {
      username,
      password,
    })

    setJWT(data)
    return data
  }

  logout = () => {
    if (this.mock) return true
    wipeJWT()
  }

  getUser = async (id: string) => {
    if (this.mock) return this.users.getOne(id)
    const { data } = await this.axios.get<User>(`users/${id}`)
    return data
  }
}

export const logOut = () => {
  wipeJWT()
  // axios -> delete session?
}
