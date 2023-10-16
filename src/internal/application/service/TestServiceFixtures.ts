import { container } from 'tsyringe'
import type IUserService from './IUserService'
import UserService from './UserService'
import { RepositoryMock } from '@/mocks/RepositoryMock'
export function getTestServiceFixtures(): () => TestServiceFixtures | undefined {
  let fixtures: TestServiceFixtures | undefined

  beforeAll(async () => {
    fixtures = new TestServiceFixtures()
  })

  afterAll(async () => {})

  return () => fixtures
}

export class TestServiceFixtures {
  public userRepository: RepositoryMock

  constructor() {
    const userRepository = new RepositoryMock()
    container.register('UserRepository', { useValue: userRepository })
    this.userRepository = userRepository
  }

  userService(): IUserService {
    return container.resolve(UserService)
  }
}
