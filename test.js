//NflArrest.com/api/v1/crime


var request = require('request');

request('http://nflarrest.com/api/v1/crime', function(err, response, body) {
  if (err) throw err;
  console.log('Response Status Code:', response.statusCode), body;
});