import { decodeToken } from '../services/auth';
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
