import express, { Request, Response } from 'express';
import logger from '/home/dahm/Desktop/jsUdacity/ImageProcessingAPI-/src/utilities.ts/logger';

import images from './api/images';
const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('main api route');
});

routes.use('/images', images);
export default routes;
