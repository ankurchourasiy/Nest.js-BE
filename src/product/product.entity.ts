import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Type: string;

  @Column()
  ProductName: string;

  @Column()
  Price: number;
}
