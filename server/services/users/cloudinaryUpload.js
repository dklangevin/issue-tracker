var multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = require('../../config');

const upload = () => {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: 'issue-tracker',
    },
    // transformation: [
    //   { if: 'w_gt_1900', width: 1900, crop: 'scale' },
    //   { if: 'h_gt_1900', height: 1900, crop: 'scale' },
    //   { quality: 'auto' },
    //   { format: 'jpg' },
    // ],
  });
  const parser = multer({ storage: storage });

  return parser.single('file');
};

module.exports = upload;
