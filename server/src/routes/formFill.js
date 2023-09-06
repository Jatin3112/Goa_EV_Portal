const express = require('express');
const router = express.Router()

const {form} = require('../controllers/formFIll')
const fieldUploads = require('../middlwares/fieldUploads')
const folderName = require('../middlwares/folderName')

router.post('/formfill',[folderName,fieldUploads], form)

module.exports = router;