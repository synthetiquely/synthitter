import { decodeToken } from '../services/auth';
import multer from 'koa-multer';

export const auth = async (ctx, next) => {
  try {
    const authHeader = ctx.headers['authorization'];

    if (authHeader) {
      const token = authHeader.split(' ')[1];

      if (token) {
        const user = await decodeToken(token);
        ctx.user = user;
      } else {
        ctx.user = null;
      }
      next();
    }

    next();
  } catch (error) {
    throw error;
  }
};

const storage = multer.memoryStorage();
export const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB
  },
});
