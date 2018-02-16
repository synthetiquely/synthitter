import mongoose, { Schema } from 'mongoose';
import { hashSync } from 'bcrypt-nodejs';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    avatar: String,
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this.hashPassword(this.password);
    return next();
  }
  return next();
});

UserSchema.methods = {
  hashPassword(password) {
    return hashSync(password);
  },
};

export default mongoose.model('User', UserSchema);
