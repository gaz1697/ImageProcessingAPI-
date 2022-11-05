import supertest from 'supertest';
//import { isAwaitExpression } from 'typescript';
import app from '../index';

//create a request object
const request = supertest(app);

describe('Test basic endpoint server', () => {
  it('get the / endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
