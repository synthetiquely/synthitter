import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

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

UserSchema.methods.hashPassword = function hashPassword(password) {
  return hashSync(password);
};
UserSchema.methods.comparePasswords = function comparePasswords(password) {
  return compareSync(password, this.password);
};

UserSchema.methods.createToken = function createToken() {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET,
  );
};

export default mongoose.model('User', UserSchema);
