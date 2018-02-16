import jwt from 'jsonwebtoken';
import User from '../models/mongo/user';

export const requireAuth = async user => {
  if (!user || !user._id) {
    throw new Error('Unathorized');
  }

  const foundUser = await User.findById(user._id);

  if (!foundUser) {
    throw new Error('Unathorized');
  }

  return foundUser;
};

export const decodeToken = authHeader => {
  const token = authHeader.split(' ')[1];

  if (!token) {
    throw new Error('No token provided');
  }

  return jwt.verify(token, process.env.JWT_SECRET);
};
