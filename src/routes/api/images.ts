import express, { Request, Response } from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

async function resizeImage(imgP: string, imgSP: string, wid: number, hei: number, res: Response) {
  try {
    await sharp(imgP)
      .resize({
        width: wid,
        height: hei,
      })
      .toFile(imgSP);
    res.sendFile(imgSP);
  } catch (err) {
    res.send('wrong values');
  }
}

const images = express.Router();

images.get('/', async (req: Request, res: Response) => {
  try {
    const filename: unknown = req.query.filename;
    const width: unknown = req.query.width;
    const height: unknown = req.query.height;
    const fname = (filename as string).substring(1, (filename as string).length - 1);
    const wid: number = +(width as number);
    const hei: number = +(height as number);
    const pth = path.join(path.resolve('./'), 'assets', 'images', fname) + '.jpg';
    const thuPth = path.join(path.resolve('./'), 'assets', 'thumb', fname) + '.jpg';

    if (!fs.existsSync(pth)) {
      res.send("file doesn't exist");
    } else {
      if (!fs.existsSync(thuPth)) {
        resizeImage(pth, thuPth, wid, hei, res);
      } else {
        const sizeD = sizeOf(thuPth);
        if (wid != (await sizeD.width) || hei != (await sizeD.height)) {
          resizeImage(pth, thuPth, wid, hei, res);
        } else {
          res.sendFile(thuPth);
        }
      }
    }
  } catch (err) {
    res.sendStatus(400);
  }
});

export default images;
