import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'str' })
export class Str {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  str: string;
}
