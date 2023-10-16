import { User as UserDomainEntity } from '@/internal/domain/entity/User'
import { type TestServiceFixtures, getTestServiceFixtures } from './TestServiceFixtures'
import { type RepositoryMock } from '@/mocks/RepositoryMock'
import type IUserService from './IUserService'

describe('TestGetAllUsers', () => {
  const getFixtures = getTestServiceFixtures()
  let fixtures: TestServiceFixtures | undefined
  let userRepository: RepositoryMock | undefined
  let userService: IUserService | undefined

  beforeEach(async () => {
    fixtures = getFixtures()
    userRepository = fixtures?.userRepository
    userService = fixtures?.userService()
  })

  afterEach(async () => {})

  test('ItShouldSucceedInGettingAllUsers', async () => {
    const userDomain = new UserDomainEntity('a', 'v')

    userRepository?.getAllUsers.mockReturnValue([userDomain])

    const result = await userService?.getAllUsers()

    expect(result).toHaveLength(1)
  })
})
