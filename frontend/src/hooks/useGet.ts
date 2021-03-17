import { useCallback, useEffect, useState } from 'react'
import Axios from 'axios'
import { setHeaders } from '../utils/jwt'

type Options = {
  subscribe: boolean
}

export type Response<T> =
  | {
      data: T
      loading: false
      error: false
      refetch: () => void
    }
  | {
      data: null
      loading: false
      error: true
      refetch: () => void
    }
  | {
      data: null
      loading: true
      error: false
      refetch: () => void
    }

export const useGet = <T>(path: string, options?: Options): Response<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState(false)

  const get = useCallback(async () => {
    try {
      const { data } = await Axios.get<T>(`/api/${path}`, { ...setHeaders() })
      setData(data)
    } catch (err) {
      setError(true)
    }
  }, [path])

  useEffect(() => {
    get()
  }, [get])

  if (data) {
    return { data, loading: false, error: false, refetch: get }
  } else if (error) {
    return { data: null, loading: false, error: true, refetch: get }
  } else {
    return { data: null, loading: true, error: false, refetch: get }
  }
}
