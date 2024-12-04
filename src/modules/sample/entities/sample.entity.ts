import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sample' })
export class Sample {
  @PrimaryGeneratedColumn()
  id: number;
}
