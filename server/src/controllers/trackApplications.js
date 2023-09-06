const {db,userTableName} = require("../config/mysqlConnection");

const tableName = userTableName

const applications = (req, res) => {
  const { applicationNumber } = req.body;



  const sql = `SELECT id, firstName,lastName,Application_No, email, status FROM ${tableName} WHERE Application_No = ?`;

  db.query(sql, [applicationNumber], (err, data) => {

    
    if (err) {
      console.log(err);
      res.status(404).send("Track Data Not Found");
    }

    res.send(data);
  });
};

module.exports = { applications };
