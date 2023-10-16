import { type UserCollection } from '@/internal/domain/entity/User'

export default interface IUserRepository {
  getAllUsers: () => Promise<UserCollection>
}
