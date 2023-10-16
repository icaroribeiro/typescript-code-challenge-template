import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { User as UserDomain } from '@/internal/domain/entity/User'

@Entity('User')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  username: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  fromDomain(userDomain: UserDomain): User {
    return new User(userDomain.id, userDomain.username)
  }

  toDomain(): UserDomain {
    return new UserDomain(this.id, this.username)
  }

  constructor(id: string, username: string) {
    this.id = id
    this.username = username
  }
}

export default User
