import express from 'express';
import routes from './routes/index';
import fs from 'fs';
import path from 'path';

const PORT = 2400;

// create server instance

const app = express();

// add routes
//app.get('/', (req, res) => {
// res.sendStatus(200);
//});
app.use('/api', routes);

// start server
app.listen(PORT, () => {
  // const thumbPath = path.resolve(__dirname, '../assets/thumb');
  // if (!fs.existsSync(thumbPath)) {
  //   fs.mkdirSync(thumbPath);
  // }
  console.log('server is starting at port:' + PORT);
});

export default app;
