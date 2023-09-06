const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    const uploadFolder = req.uploadFolder;
    fs.mkdirSync(uploadFolder, { recursive: true });
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    const fileIndex = req.fileIndex || 1; // Use req.fileIndex to keep track of the file index, initialize with 1 if not present
    const fileName = fileIndex + ".pdf";
    req.fileIndex = fileIndex + 1; // Increment the file index for the next file
    cb(null, fileName);
  },

  });
  
const upload = multer({ storage: storage });


module.exports = upload;