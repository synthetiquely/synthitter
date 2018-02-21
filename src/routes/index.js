import KoaRouter from 'koa-router';
import user from './user';
import graphql from './graphql';
import { auth } from '../config/middlewares';

const router = new KoaRouter();

router.use('/api/user', auth, user.routes());
router.use('/graphql', graphql.routes());

export default router;
