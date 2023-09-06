const express = require('express')
const router = express.Router();

const {applications} = require('../controllers/trackApplications')



router.post('/trackApplication', applications)


module.exports = router