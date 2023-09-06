const {db,userTableName} = require("../config/mysqlConnection");
const sendEmail = require("../controllers/mailController");
const path = require("path");
const fs = require("fs");

const tableName = userTableName

const applicationCardData = (req, res) => {
  const sql = `select id,Application_No,firstName,lastName,registrationNumber,batteryCapacity,vehicleType,submittedDate,modifiedDate,status from ${tableName}`;

  db.query(sql, (err, data) => {
    if (err) {
      res.status(404).send("Not Found");
    }

    res.send(data);
  });
};


const formData = (req,res) => {

  const {id} = req.params
  const sql = `select * from ${tableName} where id = ${id}`

  db.query(sql, (err,data) => {
    if(err){
      res.status(404).send("Not Found")
    }

    res.send(data)
  })
}

const user  = (req,res) => {
  const {id} = req.params

  const sql = `select id,firstName,lastName,email from ${tableName} where id = ${id}`

  db.query(sql, (err,data) => {
    if(err){
      res.status(404).send("Not Found")
    }

    res.send(data)
  })

}

const query = (req,res) => {
  const {id} = req.params
  const {query} = req.body

  const sql = `UPDATE ${tableName} SET query = ? WHERE id = '${id}'`;
  db.query(sql, [query], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while updating data" });
    }
      res.status(200).send("Query updated successfully.");
    
  });
}

const sendQuery = (req, res) => {
  const { userEmail, firstName, lastName, data } = req.body;

  sendEmail(userEmail, firstName, lastName, data)
    .then(() => {
      return res.status(201).json({
        msg: "You should receive an email",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
}

const status = (req,res) => {
  const {id} = req.params

  const sql = `select id,status from ${tableName} where id = ${id}`

  db.query(sql, (err,data) => {
    if(err){
      res.status(404).send("Data not Found")
    }
    res.send(data)
  })
}

const statusUpdate = (req, res) => {
  const id = req.params.id;
  let { status } = req.body;

  // Ensure status is not greater than 5
  if (status > 5) {
    status = 5;
  }

  const sql = `UPDATE ${tableName} SET status = ? WHERE id = '${id}'`;
  db.query(sql, [status], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while updating data" });
    } else {

      res.sendStatus(200);
    }
  });
}



const folderName =  (req, res) => {
  
  const {folderName} = req.params;
  
  const folderPath = path.join(__dirname, "../../uploadedFiles", folderName);
  const files = fs.readdirSync(folderPath);

  res.json({ files });
}

const fileName = (req, res) => {
  const folderName = req.params.folderName;
  const fileName = req.params.fileName;
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
}


module.exports = {
  applicationCardData,
  formData,
  user,
  query,
  sendQuery,
  status,
  statusUpdate,
  folderName,
  fileName
}