// This file is used by the routes to connect to the database

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "perndemo20230703", // not sure about this
    host: "localhost",
    port: 5432,
    database: "pern_todo", // database name
});

module.exports = pool;