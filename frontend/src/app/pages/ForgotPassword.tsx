import { Button, Input, Layout } from 'antd'
import { useState } from 'react'

export const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const handleClick = () => {
    console.log(email)
  }

  return (
    <Layout>
      <h1>Forgot Password</h1>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <Button onClick={handleClick}>Submit</Button>
    </Layout>
  )
}
