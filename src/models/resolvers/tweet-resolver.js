import Tweet from '../mongo/tweet';
import { requireAuth } from '../../services/auth';

export default {
  createTweet: async (_, args, { user }) => {
    await requireAuth(user);
    return Tweet.create({ ...args, user: user._id });
  },
  updateTweet: async (_, { _id, ...rest }, { user }) => {
    await requireAuth(user);
    const tweet = await Tweet.findOne({ _id, user: user._id });
    if (!tweet) {
      throw new Error('Not found!');
    }

    Object.entries(rest).forEach(([key, value]) => {
      tweet[key] = value;
    });

    return tweet.save();
  },
  getTweet: async (_, { _id }, { user }) => {
    await requireAuth(user);
    return Tweet.findById(_id);
  },
  getTweets: async (_, args, { user }) => {
    await requireAuth(user);
    return Tweet.find({}).sort({ createdAt: -1 });
  },
  getUserTweets: async (_, args, { user }) => {
    await requireAuth(user);
    return Tweet.find({ user: user._id }).sort({ createdAt: -1 });
  },
  deleteTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({ _id, user: user._id });

      if (!tweet) {
        throw new Error('Not found!');
      }

      await tweet.remove();
      return {
        message: 'Tweet deleted!',
      };
    } catch (error) {
      throw error;
    }
  },
};
