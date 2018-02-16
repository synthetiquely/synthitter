import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default () => {
  mongoose.set('debug', true);

  mongoose.connect(process.env.DB_URL);

  mongoose.connection.once('open', () => global.console.log('MongoDB running...'));
};
