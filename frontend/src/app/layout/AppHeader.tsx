import React from 'react'
import { Avatar, Button, Typography } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { User } from '../../types'
import { Link, useHistory } from 'react-router-dom'

export type NavRoute = {
  path: string
  component: any
  label: string
  exact?: boolean
}

type Props = {
  user: User | null
  routes?: NavRoute[]
}

export const AppHeader = ({ user, routes }: Props) => {
  const history = useHistory()
  // Unauthed Header
  if (!user)
    return (
      <Header className="app-header">
        <Typography.Title level={3}>MVP Django React! 🤠</Typography.Title>
      </Header>
    )

  // Authed Header
  return (
    <Header className="app-header">
      <div className="header-left">
        <Typography.Title level={3}>MVP Django React! 🤠</Typography.Title>
        {routes?.map((route) => (
          <Link to={route.path}>{route.label}</Link>
        ))}
      </div>
      <div>
        <Button onClick={() => history.push('/new/user')}>New User</Button>
      </div>
      <div className="header-right">
        <Typography.Paragraph>Welcome, {user.username}!!</Typography.Paragraph>
        <Avatar>{user.username[0]}</Avatar>
      </div>
    </Header>
  )
}
