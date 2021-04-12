import { Button, Form, Input, Layout, message } from 'antd'
import axios from 'axios'
import { User } from '../../types'

type NewUserForm = Omit<User, 'id'> & {
  password1: string
  password2: string
}

export const NewUser = () => {
  const [form] = Form.useForm<NewUserForm>()

  const handleFinish = (user: NewUserForm) => {
    console.log('Asdfdas')
    if (user.password1 !== user.password2) {
      message.error('passwords do not match')
      return
    }

    axios.post(`/dj-rest-auth/registration/`, user)
  }

  console.log('ASDFUASDJF')

  return (
    <Layout>
      <Layout.Content>
        <Form form={form} onFinish={handleFinish}>
          <Form.Item label="username" name="username">
            <Input></Input>
          </Form.Item>
          <Form.Item label="email" name="email">
            <Input type="email"></Input>
          </Form.Item>
          <Form.Item label="password" name="password1">
            <Input minLength={8}></Input>
          </Form.Item>
          <Form.Item label="confirm" name="password2">
            <Input></Input>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form>
      </Layout.Content>
    </Layout>
  )
}
