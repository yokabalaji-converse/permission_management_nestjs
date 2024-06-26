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

  @Column({ nullable: true, default: null })
  createdAt: Date;

  @Column({ nullable: true, default: null })
  updatedAt: Date;

  @Column({ nullable: true, default: null })
  deletedAt: Date;
}
