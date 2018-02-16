import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from 'koa-router';
import dotenv from 'dotenv';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools';

import db from './config/db';
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

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

db();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

app.listen(port);

global.console.log('App is listening on port', port);
