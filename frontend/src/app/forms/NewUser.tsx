import { Button, Form, Input, message } from 'antd'
import { User } from '../../types'

type NewUserForm = Omit<User, 'id'> & {
  password1: string
  password2: string
}

export const NewUser = () => {
  const [form] = Form.useForm<NewUserForm>()

  const handleFinish = (user: NewUserForm) => {
    if (user.password1 !== user.password2) {
      message.error('passwords do not match')
      return
    }
  }

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item label="username" name="name">
        <Input></Input>
      </Form.Item>
      <Form.Item label="email" name="email">
        <Input></Input>
      </Form.Item>
      <Form.Item label="password" name="password1">
        <Input></Input>
      </Form.Item>
      <Form.Item label="confirm" name="password2">
        <Input></Input>
      </Form.Item>
      <Button htmlType="submit">Create</Button>
    </Form>
  )
}
