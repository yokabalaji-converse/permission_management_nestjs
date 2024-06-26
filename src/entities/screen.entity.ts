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

  @Column({ nullable: true, default: null })
  createdAt: Date;

  @Column({ nullable: true, default: null })
  updatedAt: Date;

  @Column({ nullable: true, default: null })
  deletedAt: Date;
}
