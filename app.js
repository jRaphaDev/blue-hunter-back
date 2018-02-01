import express from 'express';

import router from './routers/index';
import db from './config/db.mongoose';

import seeds from './db/index';

const app = express();

const API_PORT = process.env.API_PORT || 3000;

app
  .get('/', (req, res) => res.send({ msg: 'Everything ok !!!'}) )
  .use('/', router);

app.listen(API_PORT, () => console.log(`API is running on port : ${API_PORT}`));