var http=require('http');
var express=require('express');
var app = express();
var path = require('path');
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded({extended:false});


var server = app.listen(8080, 'localhost', function(){
  console.log('server listening on port 8080');
});


console.log("Listening on 8080");


app.get( '/', function(req, res) {
  console.log('Hello world from base URL request');
  res.sendFile (path.resolve('public/index.html'));
});

// app.post('/processPost', urlencodedParser, function(req, res){
//   res.write('post request receeived: ' + req.body.Number1 + ' and ' + req.body.Number2);
//   res.end();
// });


app.use(express.static('public'));
