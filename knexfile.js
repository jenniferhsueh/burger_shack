// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    }
  },
};

// migrations: {
//   directory: "./db/migrations"
// },
// seeds: {
//   directory: "./db/seeds"
// }