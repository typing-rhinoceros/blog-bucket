import express from 'express';
import cors from 'cors';

export default async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));

  return app;
}