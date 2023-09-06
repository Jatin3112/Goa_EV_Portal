const upload = require('../controllers/DocumentsUploadsFolderName')

const fieldUploads = upload.fields([
    { name: "file1", maxCount: 1 },
    { name: "file2", maxCount: 1 },
    { name: "file3", maxCount: 1 },
    { name: "file4", maxCount: 1 },
    { name: "file5", maxCount: 1 },
    { name: "file6", maxCount: 1 },
    { name: "file7", maxCount: 1 },
    { name: "file8", maxCount: 1 },
    { name: "file9", maxCount: 1 },
  ])


module.exports = fieldUploads;