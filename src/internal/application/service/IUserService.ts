import { type UserCollection } from '@/internal/domain/entity/User'

export default interface IUserService {
  getAllUsers: () => Promise<UserCollection>
}
