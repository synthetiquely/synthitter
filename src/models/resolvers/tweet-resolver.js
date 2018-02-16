import Tweet from '../mongo/tweet';

export default {
  createTweet: (_, args) => Tweet.create(args),
  updateTweet: (_, { _id, ...rest }) => Tweet.findByIdAndUpdate(_id, rest, { new: true }),
  getTweet: (_, { _id }) => Tweet.findById(_id),
  getTweets: () => Tweet.find({}).sort({ createdAt: -1 }),
  deleteTweet: async (_, { _id }) => {
    try {
      await Tweet.findByIdAndRemove(_id);
      return {
        message: 'Tweet deleted!',
      };
    } catch (error) {
      throw error;
    }
  },
};
