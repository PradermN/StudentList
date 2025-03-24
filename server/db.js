const Pool = require("pg").Pool; // librarie pg to connect to postgres database

const pool = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
