import { type UserCollection as UserDomainCollection } from '@/internal/domain/entity/User'
import UserService from '@/internal/application/service/UserService'
import { injectable } from 'tsyringe'
import type IUserController from '@/internal/presentation/api/controller/IUserController'

@injectable()
class UserController implements IUserController {
  private readonly userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
  }

  public async getAllUsers(): Promise<UserDomainCollection> {
    return await this.userService.getAllUsers()
  }
}

export default UserController
