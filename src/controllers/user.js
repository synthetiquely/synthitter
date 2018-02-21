import httpStatus from 'http-status-codes';
import { decodeToken } from '../services/auth';
import * as userSerivce from '../services/user';

export const uploadUserAvatar = async ctx => {
  try {
    const avatar = ctx.req.file;
    const userId = decodeToken(ctx.request.header.authorization);
    const userAvatarSrc = await userSerivce.uploadUserAvatar(avatar, userId);
    ctx.status = httpStatus.OK;
    ctx.body = userAvatarSrc;
  } catch (error) {
    ctx.status = httpStatus.BAD_REQUEST;
    ctx.body = error;
  }
};
