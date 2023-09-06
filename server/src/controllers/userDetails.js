const {db,userTableName} = require("../config/mysqlConnection");
const path = require("path");
const fs = require("fs");

const tableName = userTableName

const userCard = (req, res) => {
  const { number } = req.params;

  const sql = `select id,firstName,lastName,Application_No, registrationNumber,batteryCapacity,vehicleType,status,modifiedDate,submittedDate from ${tableName} where number = ${number}`;

  db.query(sql, (err, data) => {
    if (err) {
      res.send("User not Available");
    }
    res.send(data);
  });
};
const userForm = (req, res) => {
  const { number } = req.params;

  const sql = `select * from ${tableName} where number = ${number}`;

  db.query(sql, (err, data) => {
    if (err) {
      res.send("User not Available");
    }
    res.send(data);
  });
};

const userQuery = (req, res) => {
  const { number } = req.params;

  const sql = `select query from ${tableName} where number = ${number}`;

  db.query(sql, (err, data) => {
    if (err) {
      res.send("User not Found");
    }
    res.send(data);
  });
};

const folderName = (req, res) => {
  const { number } = req.params;

  const sql = `select folderName from ${tableName} where number = ${number}`;

  db.query(sql, (err, data) => {
    if (err) {
      res.send("Folder Not Found");
    }

    const folderName = data[0].folderName;
    const folderPath = path.join(__dirname, "../../uploadedFiles", folderName);
    const files = fs.readdirSync(folderPath);

    res.send(files);
  });
};

const fileName = (req, res) => {
  const { number } = req.params;
  const {fileName} = req.params;

  const sql = `select folderName from ${tableName} where number = ${number}`;

  db.query(sql, (err, data) => {
    if (err) {
      res.send("Folder Not Found");
    }

    const folderName = data[0].folderName
    const folderPath = path.join(__dirname, "../../uploadedFiles", folderName);
    const filePath = path.join(folderPath, fileName);

    if (fs.existsSync(filePath)) {
      res.download(filePath, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal server error");
        }
      });
    } else {
      res.status(404).send("File not found");
    }
  });
};

module.exports = { userCard, userForm, userQuery, folderName, fileName };
