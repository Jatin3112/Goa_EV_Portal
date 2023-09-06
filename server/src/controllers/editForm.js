const {db,userTableName} = require("../config/mysqlConnection");
const fs = require("fs");
const path = require('path')

const tableName = userTableName;

const updateApplication  = (req, res) => {
    const id = req.params.id;
    const {
      fullName,
      number,
      email,
      regDate,
      regNo,
      rtoDet,
      vehicleType,
      wheelerType,
      batteryCapacity,
      houseNo,
      district,
      city,
      pincode,
      folderName,
    } = req.body;
    const [firstName, lastName] = fullName.split(" ");
    const sql = `UPDATE ${tableName} SET firstName = ?, lastName = ?,number=?, email= ?,vehicleType = ?,wheelerType = ?,batteryCapacity = ?,registrationNumber = ?,registrationDate = ?, rtoDetails = ?,houseNumber = ?, district = ?, city =?, pincode = ? WHERE id = ${id}`;
    db.query(
      sql,
      [
        firstName,
        lastName,
        number,
        email,
        vehicleType,
        wheelerType,
        batteryCapacity,
        regNo,
        regDate,
        rtoDet,
        houseNo,
        district,
        city,
        pincode,
      ],
      (err, result) => {
        if (err) {
          console.error(err);
          res
            .status(500)
            .json({ error: "An error occurred while updating data" });
        } else {
          res.sendStatus(200);
        }
      }
    );
  } 

  const folderName = (req, res) => {
    const folderName = req.params.folderName;
    const folderPath = path.join(__dirname, "uploadedFiles", folderName);
    const files = fs.readdirSync(folderPath);
  
    res.json({ files });
  }

  const updatedFiles =  (req, res) => {
    const files = req.files;
    // console.log(files)
    var indexx;
    // console.log(files);
    const fileType = req.body.fileType; // Retrieve the file type from the request body
    console.log("the file ", fileType);

    const existingFiles = fs.readdirSync(req.uploadFolder);

    if (files.length > 0) {
      var fileIndex = 1;
      var position;
      for (var index = 0; index < files.length; index++) {
        const file = files[index];
        var filetyp = fileType;
        if (files.length > 1) {
          filetyp = fileType[index];
        }
        const fileExtension = path.extname(file.originalname);
        var newFileName;
        var newFilePath;
        var existingFilePath;

        if (filetyp === "aadhaar") {
          position = 0;
          newFileName = `1.pdf`;
          fileIndex++;
        } else if (filetyp === "residence") {
          newFileName = `2.pdf`;
          position = 1;
          fileIndex++;
        } else if (filetyp === "drivinglicence") {
          newFileName = `3.pdf`;
          position = 2;
          fileIndex++;
        } else if (filetyp === "vehiclerc") {
          newFileName = `4.pdf`;
          position = 3;
          fileIndex++;
        } else if (filetyp === "vehicleinsurance") {
          newFileName = `5.pdf`;
          position = 4;
          fileIndex++;
        } else if (filetyp === "taxinvoice") {
          newFileName = `6.pdf`;
          position = 5;
          fileIndex++;
        }
        newFilePath = path.join(req.uploadFolder, newFileName);

        existingFilePath = path.join(req.uploadFolder, existingFiles[position]);
        console.log("the removed file is", existingFilePath);
        fs.unlinkSync(existingFilePath); // Remove the existing file
        // console.log('jo',file.path);

        fs.renameSync(file.path, newFilePath);
      }

      res.send("File uploaded successfully");
    } else {
      res.status(400).send("No files uploaded");
    }
  }


  module.exports = {updateApplication,folderName,updatedFiles}