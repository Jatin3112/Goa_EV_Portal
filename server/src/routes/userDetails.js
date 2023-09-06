const express = require("express");
const router = express.Router();

const { userCard, userForm,userQuery,folderName ,fileName} = require("../controllers/userDetails");

router.get("/userCard/:number", userCard);

router.get("/userForm/:number", userForm);

router.get('/userQuery/:number', userQuery)

router.get('/userFiles/:number', folderName)

router.get('/userFiles/:number/:fileName',fileName)

module.exports = router;
