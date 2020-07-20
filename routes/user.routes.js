const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.post('/', user.createConsult);

module.exports = router;