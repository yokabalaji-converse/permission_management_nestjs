import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Modules } from './modules.entity';

@Entity()
export class Screen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Modules)
  modules: Modules;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
