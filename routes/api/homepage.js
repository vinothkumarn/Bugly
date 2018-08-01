const router = require('express').Router();
const homePage = require('../../components/homepage/homepage');

const homePageObj = new homePage();
const homePageContent = homePageObj.getContent();
router.get('/', function (req, res) {
  res.send(homePageContent);
});

module.exports = router;
