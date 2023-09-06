const {up} = require('../controllers/documentUpdateFolderName')


const updatedFolder = up.array("file")

const updatedFolderName = (req, res, next) => {
    const folderName = req.params.folderName;
    console.log("folderName:", folderName);
    req.uploadFolder = `uploadedFiles/${folderName}`;
    next();
  }



module.exports= {updatedFolder,updatedFolderName}