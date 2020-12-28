require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  torreBioUrl: process.env.TORRE_BIO_URL,
  torreSearchUrl: process.env.TORRE_SEARCH_URL,
};

module.exports = { config };
