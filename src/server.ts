import 'dotenv/config';
import 'reflect-metadata';

import initApp from './app';
import initTypeorm from './database';

(async () => {

  await initTypeorm({
    synchronize: true,
    logging: true
  });
  const app = await initApp();

  app.listen(process.env.PORT || 3000, () => {
    console.log(`app listened port ${process.env.PORT}`);
  });
})();

