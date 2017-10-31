// Taken from http://expressjs.com/4x/api.html
var express = require('express');
var app = express();

app.get('/landmarks', function(request, response) {
	response.send('{"name":"Dracula\'s Castle","location":"Transylvania, Romania"}');
});

app.get('/', function(request, response) {
	response.send("Hello world");
});

app.get('/pikachu', function(request, response) {
	console.log(request);
	response.send("You've won the game!");
});

app.post('/sendLocation', function(request, response) {
	response.send('{"people":[],"landmarks":[]}');
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 8888);