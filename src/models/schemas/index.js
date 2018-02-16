export default `
  scalar Date

  type Tweet {
    _id: String
    text: String
    createdAt: Date!
    updatedAt: Date!
  }

  type User {
    _id: ID!
    username: String
    email: String
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Status {
    message: String!
  }

  type Query {
    getTweet(_id: ID!): Tweet
    getTweets: [Tweet]
  }

  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String!, username: String!): User
    signin(email: String!, password: String!): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
