import KoaRouter from 'koa-router';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../models/schemas';
import resolvers from '../models/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const router = new KoaRouter();

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

router.get(
  '/',
  graphqlKoa(ctx => ({
    schema,
    context: {
      user: ctx.user,
    },
  })),
);

router.post(
  '/',
  graphqlKoa(ctx => ({
    schema,
    context: {
      user: ctx.user,
    },
  })),
);

export default router;
