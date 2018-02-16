import GraphqlDate from 'graphql-date';
import tweetResolver from './tweet-resolver';
import userResolver from './user-resolver';
import User from '../mongo/tweet';

export default {
  Date: GraphqlDate,
  Tweet: {
    user: ({ user }) => User.findById(user),
  },
  Query: {
    getTweet: tweetResolver.getTweet,
    getTweets: tweetResolver.getTweets,
    getUserTweets: tweetResolver.getUserTweets,
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
