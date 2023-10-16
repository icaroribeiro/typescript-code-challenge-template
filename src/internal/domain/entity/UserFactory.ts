import { faker } from '@faker-js/faker'
import { User } from './User'

export const UserFactory = ({ id, username }: { id?: string; username?: string } = {}): User => {
  if (typeof id === 'undefined') {
    id = faker.string.uuid()
  }
  if (typeof username === 'undefined') {
    username = faker.internet.userName()
  }
  return new User(id, username)
}
