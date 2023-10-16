import { type UserCollection } from '@/internal/domain/entity/User'

export default interface IUserController {
  getAllUsers: () => Promise<UserCollection>
}
