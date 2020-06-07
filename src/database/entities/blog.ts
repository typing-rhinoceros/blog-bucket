import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { BaseDate } from "./date";
import { Category } from "./category";

@Entity()
export class Blog extends BaseDate {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    comment: '블로그명',
    length: 50
  })
  public blog: string;

  @OneToMany(
    type => Category,
    categories => categories.blog,
    { cascade: true }
  )
  public categories: Category[];
}