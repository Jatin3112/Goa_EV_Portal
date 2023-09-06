const {db,userTableName} = require("../config/mysqlConnection");

const tableName = userTableName

const userLogin = (req, res) => {
  const { number } = req.body;

  const sql = `select number from ${tableName} where number = ?`;

  db.query(sql, [number], (err, data) => {
    if (err) {
      res.send("User not found");
    } else if (data.length === 0) {
      res.send("Invalid Phone Number");
    } else {
      const phoneNumber = data[0].number;
      if (number === phoneNumber) {
        res.json(number);
      }
    }
  });
};


module.exports = { userLogin};
