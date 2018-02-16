import User from '../mongo/user';

export default {
  signup: (_, {
    fullName, username, password, email, avatar,
  }) => {
    const [firstName, ...lastName] = fullName.split(' ');
    return User.create({
      firstName, lastName, username, email, password, avatar,
    });
  },
};
