import { createConnection } from 'typeorm';
import { Blog, Category, Post } from './entities';

export default ({ synchronize, logging }: {
  synchronize: boolean,
  logging: boolean
}) => createConnection({
  type: 'mysql',
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USER,
  timezone: '+09:00',
  entities: [
    Blog,
    Category,
    Post
  ],
  synchronize,
  logging
});
