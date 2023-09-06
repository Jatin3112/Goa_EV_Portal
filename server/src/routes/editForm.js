const express = require("express");
const router = express.Router();

const {
  updateApplication,
  updatedFiles,
  folderName,
} = require("../controllers/editForm");
const {
  updatedFolder,
  updatedFolderName,
} = require("../middlwares/updateFolder");

router.put(
  "/editfileupload/:folderName",
  [updatedFolderName, updatedFolder],
  updatedFiles
);

router.get("/api/files/:folderName", folderName);

router.put("/update_application/:id", updateApplication);

module.exports = router;
