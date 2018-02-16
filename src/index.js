import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import dotenv from 'dotenv';

import db from './config/db';

dotenv.config();

const app = new Koa();
const port = process.env.PORT || 8080;

db();

app.use(bodyParser());
app.use(logger());

app.listen(port);

global.console.log('App is listening on port', port);
