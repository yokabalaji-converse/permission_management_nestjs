import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Modules } from './modules.entity';
import { Screen } from './screen.entity';
import { Role } from './role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, (role) => role.permissions)
  role: Role;

  @ManyToOne(() => Modules)
  @JoinTable()
  modules: Modules;

  @ManyToOne(() => Screen)
  @JoinTable()
  screens: Screen;

  @Column()
  action: string;

  @Column({ nullable: true })
  dataAccessLevel: string;

  @Column({ nullable: true })
  companyId: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
