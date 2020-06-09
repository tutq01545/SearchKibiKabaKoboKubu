var express = require('express');
var router = express.Router();

const request = require('request');
const domain = "https://www.googleapis.com/customsearch/v1?";
const searchEngineId = "014084525223874106894:4x1p9yl0hou";
const apiKey = "AIzaSyBe8wqsA28X7JYWspBtfscxL7yQuyWE9rg";
var queryString = "";
const maxItem = 2;


router.get('/query/', function(req, response) {	
	queryString = req.query.q;
	console.log(queryString);
	//queryString = "Tax payment";
	var url = domain + "cx=" + searchEngineId + "&key=" + apiKey + "&q=" + queryString;
	console.log(url);
	request(url, {json:true}, function(err, res, body) {
		var totalResult = body.searchInformation.totalResults;		
		var hits = [];
		for (var i = 0; i < maxItem; i++) {
			hits[i] = {url: body.items[i].link, snippet: body.items[i].snippet, rank: i+1}
		}
		var answer = {totalResult: totalResult, hits: hits}
		console.log(answer);
		response.send(answer);
	});
	
});

module.exports = router;