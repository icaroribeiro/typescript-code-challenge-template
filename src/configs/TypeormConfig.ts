import { DataSource } from 'typeorm'

import dotenv from 'dotenv'
dotenv.config()

const dataSource = new DataSource({
  type: 'postgres',
  username: process.env.DB_USER,
  password: process.env.D_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  logging: false,
  synchronize: true,
  entities: ['./src/internal/infrastructure/database/persistent_entity/*.ts'],
  migrationsRun: false,
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'history',
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

export default dataSource
