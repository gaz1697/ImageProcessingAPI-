import express, { Application, Request, Response } from 'express';

const PORT = 2400;

// create server instance

const app: Application = express();

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'hello world',
  });
});

// start server
app.listen(PORT, () => {
  console.log('server is starting at port:'+PORT);
});

export default app;
