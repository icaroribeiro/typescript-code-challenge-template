import UserPersistentEntity from '@/internal/infrastructure/database/persistent_entity/User'
import { type TestRepositoryFixtures, getTestRepositoryFixtures } from './TestRepositoryFixtures'
import { type DataSource } from 'typeorm'
import type IUserRepository from '@/internal/infrastructure/database/repository/IUserRepository'
import { UserFactory } from '../persistent_entity/UserFactory'

describe('TestGetAllUsers', () => {
  const getFixtures = getTestRepositoryFixtures()
  let fixtures: TestRepositoryFixtures | undefined
  let dataSource: DataSource | undefined
  let userRepository: IUserRepository | undefined

  beforeEach(async () => {
    fixtures = getFixtures()
    dataSource = fixtures?.dataSource
    userRepository = fixtures?.userRepository()
  })

  afterEach(async () => {
    const entities = dataSource?.entityMetadatas
    if (entities !== undefined) {
      for (const entity of entities) {
        await dataSource?.createQueryBuilder().delete().from(entity.name).execute()
      }
    }
  })

  test('ItShouldSucceedInGettingAllUsers', async () => {
    const userPersistent = new UserPersistentEntity('a', 'v')

    await dataSource?.createQueryBuilder().insert().into(UserPersistentEntity).values([userPersistent]).execute()

    const result = await userRepository?.getAllUsers()

    expect(result).toHaveLength(1)
  })

  test('ItShouldSucceedInGettingAllUsers2', async () => {
    const userPersistent = UserFactory({ username: 'username' })

    await dataSource?.createQueryBuilder().insert().into(UserPersistentEntity).values([userPersistent]).execute()

    const result = await userRepository?.getAllUsers()

    expect(result).toHaveLength(1)
  })
})
