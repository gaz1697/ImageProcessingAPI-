import express, { Request, Response } from 'express';
const images = express.Router();

images.get('/', (req: Request, res: Response) => {
  res.send('images api route');
});

export default images;
