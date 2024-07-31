import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from './role.entity';
import { Team } from './team.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: number;

  @Column({ nullable: true, default: null })
  rToken: string;

  @Column({ nullable: true, default: null })
  createdAt?: Date;

  @Column({ nullable: true, default: null })
  updatedAt?: Date;

  @Column({ nullable: true, default: null })
  deletedAt?: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];

  @ManyToMany(() => Team, (team) => team.users)
  @JoinTable()
  teams: Team[];
}
