const router = require('express').Router();

router.use('/', require('./controllers/home'));
// router.use('/books', require('./controllers/books'));

module.exports = router;
