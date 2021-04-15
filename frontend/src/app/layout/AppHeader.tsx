import { Avatar, Button, Dropdown, Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { User } from '../../types'
import { Link, useHistory } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'

export type NavRoute = {
  path: string
  component: any
  label: string
  exact?: boolean
}

type Props = {
  user: User | null
}

export const AppHeader = ({ user }: Props) => {
  const { handleLogout } = useUserContext()
  const history = useHistory()
  // Unauthed Header
  if (!user)
    return (
      <Header className="app-header">
        <h3>MVP Django React! 🤠</h3>
      </Header>
    )

  // Authed Header
  return (
    <Header className="app-header">
      <div className="header-left">
        <Link to="/">
          <h1>MVP Django React! 🤠</h1>
        </Link>
      </div>
      <div>
        <Button onClick={() => history.push('/new/user')}>New User</Button>
      </div>
      <div className="header-right">
        <p>Welcome, {user.username}!!</p>
        <Dropdown
          overlay={
            <Menu style={{ display: 'flex', flexDirection: 'column' }}>
              <Button onClick={() => history.push('/login')}>Login</Button>
              <Button onClick={handleLogout}>Logout</Button>
              <Button onClick={() => history.push('/forgot-password')}>
                Forgot Password
              </Button>
              <Button onClick={() => history.push('/profile')}>Profile</Button>
            </Menu>
          }
        >
          <Avatar>{user.username[0]}</Avatar>
        </Dropdown>
      </div>
    </Header>
  )
}
