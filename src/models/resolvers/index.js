import tweetResolver from './tweet-resolver';

export default {
  Query: {
    getTweet: tweetResolver.getTweet,
    getTweets: tweetResolver.getTweets,
  },
  Mutation: {
    updateTweet: tweetResolver.updateTweet,
    createTweet: tweetResolver.createTweet,
    deleteTweet: tweetResolver.deleteTweet,
  },
};
