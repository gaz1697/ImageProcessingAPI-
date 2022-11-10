import supertest from 'supertest';
import app from '../index';
//create a request object

const request = supertest(app);
describe('Test images endpoint and functionality', () => {
  it('no input', async () => {
    const response = await request.get('/api/images/');
    expect(response.text).toBe('enter file name, width and height');
  });

  it('if a file name does not exist', async () => {
    const response = await request.get('/api/images/?filename=%22trere%22&width=500&height=4000');
    expect(response.text).toBe("file doesn't exist");
  });

  it('if a file exist but height and width inputs given are not accepted', async () => {
    const response = await request.get('/api/images/?filename=%22tree%22');
    expect(response.text).toBe('wrong inputs');
  });

  it('if a file exist and height and width inputs given are correct', async () => {
    const response = await request.get('/api/images/?filename=%22tree%22&width=500&height=400');
    expect(response.status).toBe(200);
  });
});
