import { Form, Input, Layout } from 'antd'
import { User } from '../../types'

export const NewUser = () => {
  const [form] = Form.useForm<User>()

  return (
    <Form form={form}>
      <Form.Item label="username" name="name">
        <Input></Input>
      </Form.Item>
    </Form>
  )
}
