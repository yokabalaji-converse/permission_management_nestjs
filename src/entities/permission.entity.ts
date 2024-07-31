import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  //JoinTable,
  //ManyToMany,
} from 'typeorm';
// import { Modules } from './modules.entity';
// import { Role } from './role.entity';
// import { Screen } from './screen.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToMany(() => Role, (role) => role.permissions, { cascade: true })
  // @JoinTable({
  //   name: 'role_permissions',
  //   joinColumn: {
  //     name: 'permissionId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'roleId',
  //     referencedColumnName: 'id',
  //   },
  // })
  // roles: Role[];

  // @ManyToMany(() => Modules, (modules) => modules.permissions, {
  //   cascade: true,
  // })
  // @JoinTable({
  //   name: 'module_permissions',
  //   joinColumn: {
  //     name: 'permissionId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'moduleId',
  //     referencedColumnName: 'id',
  //   },
  // })
  // modules: Modules[];

  // @ManyToMany(() => Screen, (screen) => screen.permissions, { cascade: true })
  // @JoinTable({
  //   name: 'screen_permissions',
  //   joinColumn: {
  //     name: 'permissionId',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'screenId',
  //     referencedColumnName: 'id',
  //   },
  // })
  // screens: Screen[];

  // @ManyToOne(() => Role, (role) => role.permissions)
  // role: Role;

  // @ManyToMany(() => Role, (role) => role.permissions)
  // roles: Role[];

  // @ManyToMany(() => Modules, (modules) => modules.permissions, {
  //   cascade: true,
  // })
  // @JoinTable()
  // modules: Modules[];

  // @ManyToOne(() => Modules)
  // @JoinTable()
  // modules: Modules;

  // @ManyToMany(() => Screen, (screen) => screen.permissions, {
  //   cascade: true,
  // })
  // @JoinTable()
  // screens: Screen[];

  // @Column()
  // action: string;

  // @Column({ nullable: true })
  // dataAccessLevel: string;

  // @Column({ nullable: true })
  // companyId: number;

  @Column({ nullable: true, default: null })
  createdAt: Date;

  @Column({ nullable: true, default: null })
  updatedAt: Date;

  @Column({ nullable: true, default: null })
  deletedAt: Date;
}
