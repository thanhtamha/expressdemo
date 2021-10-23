require("dotenv").config();

const Config = {
  APP_PORT: process.env.APP_PORT || 3001,
  ENABLE_CORS: process.env.ENABLE_CORS === "Y" ? true : false,

  // Database
  DB_URL: process.env.DATABASE_URL,
  MONGO_URL: process.env.MONGO_URL,
};

module.exports = { Config };
