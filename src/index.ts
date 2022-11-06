import express from 'express';
import routes from './routes/index';
import fs from 'fs';
import path from 'path';
import logger from '/home/dahm/Desktop/jsUdacity/ImageProcessingAPI-/src/utilities.ts/logger';
const PORT = 2400;

// create server instance

const app = express();

// add routes
app.use('/api', routes);

// start server
app.listen(PORT, () => {
  const thumbPath = path.resolve(__dirname, '../assets/thumb');
  if (!fs.existsSync(thumbPath)) {
    fs.mkdirSync(thumbPath);
  }

  console.log('server is starting at port:' + PORT);
});

export default app;
