
const multer = require("multer");
const fs = require('fs')


const store = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadFolder = req.uploadFolder;
      fs.mkdirSync(uploadFolder, { recursive: true });
      cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const variableName = req.body.firstName + "_" + req.body.lastName;
      const fileName = variableName + "-" + uniqueSuffix + ".pdf";
      cb(null, fileName);
    },
  });
  const up = multer({ storage: store });


  module.exports = {up}