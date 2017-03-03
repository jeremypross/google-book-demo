const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.search);

module.exports = router;
