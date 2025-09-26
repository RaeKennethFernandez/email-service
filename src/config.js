require("dotenv").config();

module.exports = {
  accounts: JSON.parse(process.env.EMAIL_ACCOUNTS || "[]"),
  limit: parseInt(process.env.EMAIL_LIMIT || "150"),
  port: process.env.PORT || 4000,
};
