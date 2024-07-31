import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  //  JoinTable,
  //  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
//import { Modules } from './modules.entity';
//import { Permission } from './permission.entity';
import { RoleModuleScreen } from './roleModuleScreen.entity';
import { Modules } from './modules.entity';

@Entity()
export class Screen {
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

  // @ManyToMany(() => Permission, (permission) => permission.screens)
  // permissions: Permission[];
  // @ManyToMany(() => Modules, (modules) => modules.screens)
  // modules: Modules[];
  @ManyToMany(() => Modules, (modules) => modules.screens)
  @JoinTable()
  modules: Modules[];

  // @ManyToMany(() => Permission, (permission) => permission.screens)
  // permissions: Permission[];

  @OneToMany(
    () => RoleModuleScreen,
    (roleModuleScreen) => roleModuleScreen.screen,
  )
  roleModuleScreens: RoleModuleScreen[];
}
