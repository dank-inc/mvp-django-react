import React from 'react'
import { Avatar, Typography } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { User } from '../types'
import { Link } from 'react-router-dom'

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
      <div className="header-right">
        <Typography.Paragraph>Welcome, {user.username}!!</Typography.Paragraph>
        <Avatar />
      </div>
    </Header>
  )
}
