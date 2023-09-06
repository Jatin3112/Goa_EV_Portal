const express = require("express");
const router = express.Router();

const { login, protectedApi } = require("../controllers/adminLogin");

const {ensureToken} = require('../middlwares/ensureToken')

router.post("/adminLogin", login);

router.get("/apiProtected", ensureToken, protectedApi);

module.exports = router;
