import User from '../mongo/user';
import { requireAuth } from '../../services/auth';

export default {
  signup: (_, { fullName, username, password, email, avatar }) => {
    const [firstName, ...lastName] = fullName.split(' ');
    return User.create({
      firstName,
      lastName,
      username,
      email,
      password,
      avatar,
    });
  },
  signin: async (_, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User doesn't exist");
    }

    if (!user.comparePasswords(password)) {
      throw new Error('Passwords do not match');
    }

    const token = user.createToken();

    return {
      user,
      token
    };
  },
  getCurrentUser: async (_, args, { user }) => {
    return await requireAuth(user);
  },
};
