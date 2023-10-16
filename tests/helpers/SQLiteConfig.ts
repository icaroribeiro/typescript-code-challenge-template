import { DataSource } from 'typeorm'
import Database from 'better-sqlite3'

export class SQLite {
  private sqliteDB: any
  public dataSource: DataSource

  async setup(): Promise<void> {
    this.sqliteDB = new Database(':memory:', { verbose: console.log })
    this.dataSource = new DataSource({
      name: 'default',
      type: 'better-sqlite3',
      database: ':memory:',
      entities: ['./src/internal/infrastructure/database/persistent_entity/*.ts'],
      synchronize: true,
    })
    await this.dataSource
      .initialize()
      .then(() => {})
      .catch(err => {
        console.error(`Failed to initialize datasource:`, err)
      })
  }

  async destroy(): Promise<void> {
    await this.dataSource.destroy()
    this.sqliteDB.close()
  }
}
