const router = require('express').Router()

router.get('/', function (req, res) {
  res.sendFile(appRoot+ '/public/html/homepage.html')
})

module.exports = router
