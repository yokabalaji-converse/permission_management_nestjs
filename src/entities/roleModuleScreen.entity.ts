import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from './role.entity';
import { Modules } from './modules.entity';
import { Screen } from './screen.entity';

@Entity()
export class RoleModuleScreen {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, (role) => role.roleModuleScreens)
  role: Role;

  @ManyToOne(() => Modules, (module) => module.roleModuleScreens)
  module: Modules;

  @ManyToOne(() => Screen, (screen) => screen.roleModuleScreens)
  screen: Screen;
}
