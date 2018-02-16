import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import dotenv from 'dotenv';

dotenv.config();

const app = new Koa();
const port = process.env.PORT || 8080;

app.use(bodyParser());
app.use(logger());

app.listen(port);

global.console.log('App is listening on port', port);
