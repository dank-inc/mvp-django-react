import React from 'react'
import { Layout } from 'antd'
import { useUserContext } from '../contexts/UserContext'
import { Login } from '../pages/Login'
import { Route, Switch } from 'react-router'
import { Dashboard } from '../pages/Dashboard'
import { NavRoute, AppHeader } from './AppHeader'
import { Profile } from '../pages/Profile'

export const CoreLayout = () => {
  const { user } = useUserContext()

  const routes: NavRoute[] = [
    { exact: true, path: '/', label: 'Dashboard', component: Dashboard },
    { path: '/profile', label: 'Profile', component: Profile },
  ]

  if (!user)
    return (
      <Layout className="layout">
        <AppHeader user={user} />
        <Login />
      </Layout>
    )

  // header, sidebar, avatar?
  return (
    <Layout className="layout">
      <AppHeader user={user} routes={routes} />
      <Switch>
        <Layout.Content>
          {routes.map(({ exact, path, component }) => (
            <Route exact={exact} key={path} path={path} component={component} />
          ))}
        </Layout.Content>
      </Switch>
    </Layout>
  )
}
