const express = require("express");
const router = express.Router();

const {
  applicationCardData,
  formData,
  user,
  query,
  sendQuery,
  status,
  statusUpdate,
  folderName,
  fileName
} = require("../controllers/application");

router.get("/applicationCard", applicationCardData);

router.get("/formData/:id", formData);

router.get("/user/:id", user);

router.put("/query/:id", query);

router.post("/sendQuery", sendQuery);

router.get('/status/:id', status)

router.put('/statusUpdate/:id',statusUpdate)

router.get('/files/:folderName', folderName)

router.get('/files/:folderName/:fileName', fileName)

module.exports = router;
