import Tweet from '../mongo/tweet';
import { requireAuth } from '../../services/auth';

export default {
  createTweet: async (_, args, { user }) => {
    await requireAuth(user);
    return Tweet.create(args);
  },
  updateTweet: async (_, { _id, ...rest }, { user }) => {
    await requireAuth(user);
    return Tweet.findByIdAndUpdate(_id, rest, { new: true });
  },
  getTweet: async (_, { _id }, { user }) => {
    await requireAuth(user);
    return Tweet.findById(_id);
  },
  getTweets: async (_, args, { user }) => {
    await requireAuth(user);
    return Tweet.find({}).sort({ createdAt: -1 });
  },
  deleteTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      await Tweet.findByIdAndRemove(_id);
      return {
        message: 'Tweet deleted!',
      };
    } catch (error) {
      throw error;
    }
  },
};
