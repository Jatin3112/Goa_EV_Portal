const express = require("express");
const router = express.Router();

const {
adminManagement,
adminDelete,
adminUpdate,
addAdmin
} = require("../controllers/adminManagement");

router.get("/admin_management", adminManagement);

router.delete("/admin/:id", adminDelete);

router.put("/admin/:id", adminUpdate);

router.post("/admin_management/add", addAdmin);

module.exports = router;
