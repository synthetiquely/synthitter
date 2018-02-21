import cloudinary from 'cloudinary';

export const uploadImageToCloudinary = image => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream((error, result) => {
          if (error) reject(error);
          resolve(result.secure_url);
        })
        .end(image.buffer);
    });
  } catch (error) {
    throw new Error("Can'not upload image to Cloudinary service");
  }
};
