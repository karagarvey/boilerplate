const router = require('express').Router();

router.use('/firstRoute', require('./firstRoute'))
router.use('/secondRoute', require('./secondRoute'))

module.exports = router
