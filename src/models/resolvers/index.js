import tweetResolver from './tweet-resolver';

export default {
  Query: {
    getTweets: tweetResolver.getTweets,
  },
};
