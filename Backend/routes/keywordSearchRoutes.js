const express = require('express');
const getKeywordSearchVolume = require('../controllers/keywordSearchController.js');

const router = express.Router();

router.get('/', getKeywordSearchVolume)

module.exports = router;