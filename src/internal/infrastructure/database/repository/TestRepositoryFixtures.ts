import { type DataSource } from 'typeorm'
import UserRepository from '@/internal/infrastructure/database/repository/UserRepository'
import type IUserRepository from '@/internal/infrastructure/database/repository/IUserRepository'
import { SQLite } from '@/helpers/SQLiteConfig'

export function getTestRepositoryFixtures(): () => TestRepositoryFixtures | undefined {
  const sqlite = new SQLite()
  let fixtures: TestRepositoryFixtures | undefined

  beforeAll(async () => {
    await sqlite.setup()
    const dataSource = sqlite.dataSource
    fixtures = new TestRepositoryFixtures(dataSource)
  })

  afterAll(async () => {
    await sqlite.destroy()
  })

  return () => fixtures
}

export class TestRepositoryFixtures {
  public dataSource: DataSource

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource
  }

  userRepository(): IUserRepository {
    return new UserRepository(this.dataSource)
  }
}
