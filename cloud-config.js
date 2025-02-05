require('dotenv').config(); // Ensure this is at the top

const cloudinary = require('cloudinary').v2;

// Configuring Cloudinary using the URL from .env
cloudinary.config({
  cloud_name: "dvlwgymp3",
  api_key: "641467192962212",  // Hardcoded API key
  api_secret: "1oCRgfES7yVS-xFl9vErVbuB7OU",  // Hardcoded API secret
});

console.log("CLOUDINARY_URL:", process.env.CLOUDINARY_URL);


console.log("Cloudinary Config:", {
    cloud_name: process.env.CLOUD_NAME,  // Optional debug info
    api_key: process.env.CLOUD_API_KEY, // Optional debug info
    api_secret: process.env.CLOUD_API_SECRET, // Optional debug info
});

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'wanderlust_DEV',
        allowed_formats: ["png", "jpg", "jpeg"],  // Ensure formats are correct
    },
});

module.exports = { cloudinary, storage };
