import Tweet from '../mongo/tweet';

export default {
  getTweets: () => Tweet.find({}),
};
