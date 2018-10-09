const router = require('express').Router()

// add mappings here when new files are added in api folder
router.use('', require('./homepage'))
router.use('/results', require('./results'))

module.exports = router
