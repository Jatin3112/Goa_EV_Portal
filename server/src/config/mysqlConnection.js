const sql = require("mysql");

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "website_testing",
});

db.connect((err) => {
  err ? console.log("Error Connecting Database!") : console.log("Database Connected Successfully");
});

const userTableName = "goa_ev"

const adminTableName = "admin_login"



module.exports = {db,userTableName,adminTableName}