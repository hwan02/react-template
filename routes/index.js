const express = require('express');
const router = express.Router();
// const category = require('./router/category');

// const template = require('./template');

const
		main = require('./router/main'),
		send = require('./router/send');
router.use('/', main);
router.use('/send',send);

module.exports = router;
