const {db,adminTableName} = require("../config/mysqlConnection");
const jwt = require("jsonwebtoken");


const tableName = adminTableName;

const login = (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM ${tableName} WHERE email = ? AND password = ?`;

  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching data" });
    } else {
      if (data.length === 0) {
        res.status(404).json({ error: "Invalid email or password" });
      } else {
        const user = {
          id: data[0].id,
          email: data[0].email,
          role: data[0].role,
        };

        const token = jwt.sign({ user }, "secret_key", {expiresIn:'24h'});
        // console.log(user);
        //   console.log(token)

        res.json({
          token: token,
          data: data,
        });
      }
    }
  });
};

const protectedApi = (req, res) => {
  jwt.verify(req.token, "secret_key", (err, data) => {

    if (err) {
      res.sendStatus(403);
    } else {
      if (data.user.role === "super_admin") {
        res.json({
          text: "Protected api for super_admin",
          data: data,
        });
      } else if (data.user.role === "accounts") {
        res.json({
          text: "Protected api for accounts",
          data: data,
        });
      } else if (data.user.role === "technical") {
        res.json({
          text: "Protected api for technical",
          data: data,
        });
      } else {
        res.json({
          text: "Protected api for unknown role",
          data: data,
        });
      }
    }
  });
};

module.exports = { login, protectedApi };
