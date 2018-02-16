import GraphqlDate from 'graphql-date';
import tweetResolver from './tweet-resolver';
import userResolver from './user-resolver';

export default {
  Date: GraphqlDate,
  Query: {
    getTweet: tweetResolver.getTweet,
    getTweets: tweetResolver.getTweets,
    getCurrentUser: userResolver.getCurrentUser,
  },
  Mutation: {
    updateTweet: tweetResolver.updateTweet,
    createTweet: tweetResolver.createTweet,
    deleteTweet: tweetResolver.deleteTweet,
    signup: userResolver.signup,
    signin: userResolver.signin,
  },
};
