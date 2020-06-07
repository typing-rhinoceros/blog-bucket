import 'dotenv/config';

import initApp from './app';

(async () => {
  const app = await initApp();

  app.listen(process.env.PORT || 3000, () => {
    console.log(`app listened port ${process.env.PORT}`);
  });
})();

