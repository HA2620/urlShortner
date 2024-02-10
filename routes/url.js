const express = require('express');
const {generateNewShortUrl} = require('../controllers/url');
const {getAnalytics } = require("../controllers/getAnalytics");

const router = express.Router();

router.post("/", generateNewShortUrl);

router.get("/analytics/:shortId", getAnalytics);

module.exports = router;

