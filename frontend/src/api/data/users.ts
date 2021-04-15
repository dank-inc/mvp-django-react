import { DataBuddy } from '@dank-inc/data-buddy'
import { User } from '../../types'

const userRecords: User[] = [
  {
    id: '42',
    username: 'TestUser42',
    email: 'testuser@email.com',
  },
]

export const users = new DataBuddy(userRecords)
