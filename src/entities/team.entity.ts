import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, default: null })
  createdAt: Date;

  @Column({ nullable: true, default: null })
  updatedAt: Date;

  @Column({ nullable: true, default: null })
  deletedAt: Date;

  @ManyToMany(() => Role, (role) => role.teams)
  @JoinTable()
  roles: Role[];

  @ManyToMany(() => User, (user) => user.teams)
  users: User[];
}
