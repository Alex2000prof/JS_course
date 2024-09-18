const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1739",
  database: "hw_16.09.24",
  port: "5432",
});

module.exports = pool;
