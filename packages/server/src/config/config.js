const dotenv = require("dotenv");

dotenv.config();

const {
  NODE_ENV = "production",
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  PORT,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME,
} = process.env;

const CONFIG = {
  production: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
    cloudinary: {
      key: CLOUDINARY_API_KEY,
      secret: CLOUDINARY_API_SECRET,
      name: CLOUDINARY_NAME,
    },
  },
  development: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
    cloudinary: {
      key: CLOUDINARY_API_KEY,
      secret: CLOUDINARY_API_SECRET,
      name: CLOUDINARY_NAME,
    },
  },
  test: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
    cloudinary: {
      key: CLOUDINARY_API_KEY,
      secret: CLOUDINARY_API_SECRET,
      name: CLOUDINARY_NAME,
    },
  },
};

// Export configuration
module.exports = {
  config: CONFIG[NODE_ENV],
};
