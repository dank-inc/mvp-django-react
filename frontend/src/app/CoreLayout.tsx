import { Layout } from 'antd'
import { useUserContext } from '../contexts/UserContext'
import { Login } from './pages/Login'
import { Route, Switch } from 'react-router'
import { Dashboard } from './pages/Dashboard'
import { AppHeader } from './layout/AppHeader'
import { Profile } from './pages/Profile'
import { NewUser } from './forms/NewUser'
import { ForgotPassword } from './pages/ForgotPassword'

export const CoreLayout = () => {
  const { user } = useUserContext()

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
      <AppHeader user={user} />
      <Layout.Content>
        <Switch>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/login" component={Login} />
          <Route path="/new/user" component={NewUser} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Layout.Content>
    </Layout>
  )
}
