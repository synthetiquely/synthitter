import GraphqlDate from 'graphql-date';
import tweetResolver from './tweet-resolver';

export default {
  Date: GraphqlDate,
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
