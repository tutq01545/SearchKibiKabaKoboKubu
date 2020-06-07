var express = require('express');
var router = express.Router();

const request = require('request');
const domain = "https://www.googleapis.com/customsearch/v1?";
const searchEngineId = "014084525223874106894:4x1p9yl0hou";
const apiKey = "AIzaSyBe8wqsA28X7JYWspBtfscxL7yQuyWE9rg";
var queryString = "Tax+payment";
var url = domain + "cx=" + searchEngineId + "&key=" + apiKey + "&q=" + queryString;

request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
	router.get('/', function(req, response, next) {
		console.log(url);
		var topHit = body.items[0].link;
		var secondHit = body.items[1].link;
		var totalResult = body.searchInformation.totalResults;
		var topHitSnippet = body.items[0].snippet;
		var secondHitSnippet = body.items[1].snippet;
		response.render('google', { topHit: topHit, total_results: totalResult, topHitSnippet: topHitSnippet, 
									secondHit: secondHit, secondHitSnippet: secondHitSnippet});
	});
});

module.exports = router;