const dotenv = require("dotenv");
dotenv.config();

const { URI, PORT, FRONTEND } = process.env;

module.exports = { URI, PORT, FRONTEND };
