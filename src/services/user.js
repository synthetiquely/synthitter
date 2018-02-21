import userRepository from '../repositories/user';
import { uploadImageToCloudinary } from './upload';

export const uploadUserAvatar = async (avatar, userId) => {
  const avatarSrc = await uploadImageToCloudinary(avatar);
  const updatedUser = await userRepository.updatedUser(userId, {
    avatar: avatarSrc,
  });
  if (updatedUser) {
    return updatedUser.avatar;
  } else {
    throw new Error("No such user found. Can'not update avatar");
  }
};
