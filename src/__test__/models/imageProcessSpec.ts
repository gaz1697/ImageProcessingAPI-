import path from 'path';
import supertest from 'supertest';
import processImage from '../../models/imageProcess';

describe('Test imageProcess functionality', () => {
  it('if a file name does not exist', async () => {
    const res = await processImage('rerr', 300, 200);
    expect(res).toBe("file doesn't exist");
  });

  it('if a file exist but height and width inputs given are not accepted', async () => {
    const res = await processImage('.tree.', 34, -1);
    expect(res).toBe('wrong inputs');
  });

  it('if a file exist and height and width inputs given are correct', async () => {
    const res = await processImage('.tree.', 300, 500);
    const pth = path.join(path.resolve('./'), 'assets', 'thumb', 'tree.jpg');
    expect(res).toBe(pth);
  });
});
