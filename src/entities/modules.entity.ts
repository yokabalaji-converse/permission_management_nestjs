import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Modules {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
