import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseDate } from "./date";
import { Blog } from "./blog";
import { Post } from "./post";

@Entity()
export class Category extends BaseDate {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ 
    type: 'varchar',
    length: 20,
    comment: '카테고리명'
  })
  public name: string;

  @ManyToOne(
    type => Blog,
    blog => blog.categories,
    { onDelete: 'CASCADE' }
  )
  public blog: Blog;

  @OneToMany(
    type => Post,
    posts => posts.category,
    { cascade: true }
  )
  public posts: Post[];
}