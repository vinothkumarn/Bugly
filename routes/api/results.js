const router = require('express').Router()
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var crawler = require('../../components/crawler/crawler')
var evaluate = require('../../components/evaluate/evaluate')

var crawlerObj = new crawler()
var evaluateObj = new evaluate()
router.post('', urlencodedParser, async (req, res) => {
  var crawledContent = await crawlerObj.getContent(req.body.inputUrl)
  var evaluatedResult = evaluateObj.processHtml(crawledContent)
  res.send(evaluatedResult)
})

module.exports = router