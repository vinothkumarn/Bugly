const router = require('express').Router()
let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
let crawler = require('../../components/crawler/crawler')
let evaluate = require('../../components/evaluate/evaluate')

let crawlerObj = new crawler()
let evaluateObj = new evaluate()
router.post('', urlencodedParser, async (req, res) => {
	let url = req.body.inputUrl
  let crawledContent = await crawlerObj.getContent(url)
  let evaluatedResult = evaluateObj.processHtml(url, crawledContent)
  res.json(JSON.parse(evaluatedResult))
})

module.exports = router