import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  // ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Screen } from './screen.entity';
//import { Permission } from './permission.entity';
import { RoleModuleScreen } from './roleModuleScreen.entity';
@Entity()
export class Modules {
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

  // @ManyToMany(() => Permission, (permission) => permission.modules)
  // permissions: Permission[];
  // @ManyToMany(() => Permission, (permission) => permission.modules)
  // permissions: Permission[];
  @ManyToMany(() => Screen, (screen) => screen.modules)
  @JoinTable()
  screens: Screen[];
  // @ManyToMany(() => Screen, (screen) => screen.modules)
  // screens: Screen[];

  @OneToMany(
    () => RoleModuleScreen,
    (roleModuleScreen) => roleModuleScreen.module,
  )
  roleModuleScreens: RoleModuleScreen[];
}
