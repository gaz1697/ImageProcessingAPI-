import express, { Request, Response } from 'express';
import processImage from '../../models/imageProcess';

const images = express.Router();

images.get('/', async (req: Request, res: Response) => {
  const filename: unknown = await req.query.filename;
  const width: unknown = await req.query.width;
  const height: unknown = await req.query.height;
  const img = await processImage(filename as string, width as number, height as number);
  if (img == 'wrong inputs' || img == "file doesn't exist" || img == 'enter file name, width and height') {
    res.send(img);
  } else {
    res.sendFile(img);
  }
});

export default images;
