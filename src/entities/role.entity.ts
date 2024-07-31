import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
//import { Permission } from './permission.entity';
import { User } from './user.entity';
import { RoleModuleScreen } from './roleModuleScreen.entity';
//import { Team } from './team.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, default: null })
  createdAt?: Date;

  @Column({ nullable: true, default: null })
  updatedAt?: Date;

  @Column({ nullable: true, default: null })
  deletedAt?: Date;

  // @ManyToMany(() => Permission)
  // @JoinTable()
  // permissions: Permission[];
  // @ManyToMany(() => Permission, (permission) => permission.roles, {
  //   cascade: true,
  // })
  // @JoinTable()
  // permissions: Permission[];

  // @ManyToMany(() => Permission, (permission) => permission.roles)
  // permissions: Permission[];

  @OneToMany(
    () => RoleModuleScreen,
    (roleModuleScreen) => roleModuleScreen.role,
  )
  roleModuleScreens: RoleModuleScreen[];

  @ManyToMany(() => User, (user) => user.roles)
  @JoinTable()
  users: User[];

  // @ManyToMany(() => Team, (team) => team.roles)
  // @JoinTable()
  // teams: User[];
}
