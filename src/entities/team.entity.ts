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

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;

  @ManyToMany(() => Role)
  @JoinTable({ name: 'Team_Roles' })
  roles: Role[];

  @ManyToMany(() => User, (user) => user.teams)
  users: User[];
}
