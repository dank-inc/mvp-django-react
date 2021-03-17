import { namespace } from '../config'

export type JWT = {
  id: string
  token: string
  exp: number
}

const getJWT = (): null | JWT => {
  const id = window.localStorage.getItem(`${namespace}-id`)
  const token = window.localStorage.getItem(`${namespace}-token`)
  const exp = parseInt(window.localStorage.getItem(`${namespace}-exp`) || '')

  if (!id || !token || exp < +new Date()) {
    wipeJWT()
    return null
  }

  return {
    id,
    token,
    exp,
  }
}

const setJWT = (token: JWT): void => {
  window.localStorage.setItem(`${namespace}-id`, token.id)
  window.localStorage.setItem(`${namespace}-token`, token.token)
  window.localStorage.setItem(`${namespace}-exp`, token.exp + '')
}

const wipeJWT = (): void => {
  window.localStorage.removeItem(`${namespace}-id`)
  window.localStorage.removeItem(`${namespace}-token`)
  window.localStorage.removeItem(`${namespace}-exp`)
}

const setHeaders = () => {
  const token = window.localStorage.getItem(`${namespace}-token`)
  if (!token) throw new Error('Token gone!')

  return { headers: { Authorization: token } }
}

export { getJWT, setJWT, wipeJWT, setHeaders }
