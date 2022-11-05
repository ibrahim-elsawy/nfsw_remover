const express = require('express');
const router = express.Router();
const processController = require('../controllers/processController');


router.route('/')
	.post(processController.process);


module.exports = router;