import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from 'koa-router';
import cors from '@koa/cors';
import dotenv from 'dotenv';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools';

import db from './config/db';
import { auth } from './config/middlewares';
import typeDefs from './models/schemas';
import resolvers from './models/resolvers';

dotenv.config();

const app = new Koa();
const port = process.env.PORT || 8080;
const router = new Router();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

router.post(
  '/graphql',
  graphqlKoa(ctx => ({
    schema,
    context: {
      user: ctx.user,
    },
  })),
);
router.get(
  '/graphql',
  graphqlKoa(ctx => ({
    schema,
    context: {
      user: ctx.user,
    },
  })),
);
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

db();

app.use(cors());
app.use(bodyParser());
// app.use(auth);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

app.listen(port);

global.console.log('App is listening on port', port);
