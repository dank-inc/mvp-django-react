import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { useUserContext } from '../../contexts/UserContext'

type Credentials = {
  username: string
  password: string
}

export const Login = () => {
  const { handleLogin } = useUserContext()

  const [form] = useForm<Credentials>()

  const handleSubmit = ({ username, password }: Credentials) => {
    handleLogin(username, password)
  }

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item label="username" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="password" name="password">
        <Input type="password" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Login!
      </Button>
    </Form>
  )
}
