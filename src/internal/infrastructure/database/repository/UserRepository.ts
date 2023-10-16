import { type Repository, type DataSource } from 'typeorm'
import { type UserCollection as UserDomainEntityCollection } from '@/internal/domain/entity/User'
import type IUserRepository from '@/internal/infrastructure/database/repository/IUserRepository'
import UserPersistentEntity from '@/internal/infrastructure/database/persistent_entity/User'
import { injectable, inject } from 'tsyringe'

@injectable()
class UserRepository implements IUserRepository {
  protected repository: Repository<UserPersistentEntity>

  constructor(@inject('DataSource') private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(UserPersistentEntity)
  }

  public async getAllUsers(): Promise<UserDomainEntityCollection> {
    const result = await this.repository.find()
    return result.map(v => v.toDomain())
  }
}

export default UserRepository
