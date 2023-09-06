const folderName = (req, res, next) => {
    const uniqueFolderName = Date.now();
    const fixedFolderName = `${uniqueFolderName}`;
    req.uploadFolder = `uploadedFiles/${fixedFolderName}`;
    next();
  }


  module.exports = folderName;