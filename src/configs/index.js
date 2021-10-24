require("dotenv").config();
const Constant = {
  // Pagination
  pageSize: 10,
  sortAsc: "asc",
  sortDesc: "desc",
};

const Config = {
  APP_PORT: process.env.APP_PORT || 3001,
  ENABLE_CORS: process.env.ENABLE_CORS === "Y" ? true : false,

  // Database
  DB_URL: process.env.DATABASE_URL,
  MONGO_URL: process.env.MONGO_URL,
};

module.exports = { Config, Constant };
