import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BaseDate } from "./date";
import { Category } from "./category";

@Entity()
export class Post extends BaseDate {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    comment: '포스팅명',
    length: 100
  })
  public name: string;

  @ManyToOne(
    type => Category,
    category => category.posts,
    { onDelete: 'CASCADE' }
  )
  public category: Category;
}