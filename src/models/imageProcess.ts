import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

async function resizeImage(imgP: string, imgSP: string, wid: number, hei: number): Promise<string> {
  try {
    await sharp(imgP)
      .resize(+wid, +hei)
      .toFile(imgSP);
    return imgSP;
  } catch (err) {
    return 'wrong inputs';
  }
}

async function processImage(filename: string, width: number, height: number): Promise<string> {
  try {
    const fname = await filename.substring(1, filename.length - 1);
    const pth = (await path.join(path.resolve('./'), 'assets', 'images', fname)) + '.jpg';
    const thuPth = (await path.join(path.resolve('./'), 'assets', 'thumb', fname)) + '.jpg';

    if (!fs.existsSync(pth)) {
      return "file doesn't exist";
    } else {
      if (!fs.existsSync(thuPth)) {
        return resizeImage(pth, thuPth, width, height);
      } else {
        const sizeD = sizeOf(thuPth);
        if (+width != (await sizeD.width) || +height != (await sizeD.height)) {
          return resizeImage(pth, thuPth, width, height);
        } else {
          return thuPth;
        }
      }
    }
  } catch (err) {
    return 'enter file name, width and height';
  }
}

export default processImage;
