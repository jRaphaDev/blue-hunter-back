import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routers/index';
import db from './config/db.mongoose';

import seeds from './db/index';

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use('/', router);

const API_PORT = process.env.API_PORT || 3000;

app.get('/', (req, res) => res.send({ msg: 'Everything ok !!!'}) )

app.listen(API_PORT, () => console.log(`API is running on port : ${API_PORT}`));