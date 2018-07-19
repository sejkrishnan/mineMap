var http = require('http');
var fs = require('fs');
var route = require('./routes/route.js')
var mongoose = require('./configurations/mongoose');
var express = require('express');
var app = express();

var ctr = require('./controllers/mine-controller.js');
 
app.use(express.static('public'));
app.use('/', route);
//app.use(express.static('public/scripts'));
// app.get("/getMines", ctr.mines);
//  app.get('/', function(req, res){

//    res.sendFile('/Users/sejal/Desktop/rba/myExpressApp/src/public/index.html')

//  }); 


 


 

http.createServer(app).listen(9000);


