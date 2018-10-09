const config = require('./config/config')
const http = require('http')
const express = require('express')
const app = express()
const path = require('path')
global.appRoot = path.resolve(__dirname)

app.use(require('./routes'))
app.use(express.static('public'))

port = config.port
app.listen(port, () => {
  console.log(`Server started and running on port ${port}/`)
})
