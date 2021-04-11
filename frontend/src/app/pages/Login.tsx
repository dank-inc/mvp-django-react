import { FormEvent, useState } from 'react'
import { useUserContext } from '../../contexts/UserContext'

export const Login = () => {
  const { handleLogin } = useUserContext()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    handleLogin(username, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        value={password}
      />
      <button type="submit">Login!</button>
    </form>
  )
}
