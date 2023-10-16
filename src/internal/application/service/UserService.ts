import { type UserCollection as UserDomainCollection } from '@/internal/domain/entity/User'
import type IUserService from '@/internal/application/service/IUserService'
import { inject, injectable } from 'tsyringe'
import IUserRepository from '@/internal/infrastructure/database/repository/IUserRepository'

@injectable()
class UserService implements IUserService {
  constructor(@inject('UserRepository') private readonly userRepository: IUserRepository) {}

  public async getAllUsers(): Promise<UserDomainCollection> {
    return await this.userRepository.getAllUsers()
  }
}

export default UserService
