import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from '@koa/cors';
import dotenv from 'dotenv';

import db from './config/db';
import routes from './routes';
import { auth } from './config/middlewares';

dotenv.config();

const app = new Koa();
const port = process.env.PORT || 8080;

db();

app.use(cors());
app.use(bodyParser());
// app.use(auth);
app.use(routes.routes());
app.use(routes.allowedMethods());
app.use(logger());

app.listen(port);

global.console.log('App is listening on port', port);
