import User from '../models/mongo/user';

export const updateUser = (id, payload) => {
  return User.findByIdAndUpdate({ _id: id }, { ...payload }, { new: true });
};
