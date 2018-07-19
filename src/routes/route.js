var express = require('express');
var app = express.Router();
var ctr = require('../controllers/mine-controller');
app.get('/', function(req, res){

       res.sendFile('/Users/sejal/Desktop/rba/myExpressApp/src/public/index.html')
    
     });
app.get("/getMines", ctr.mines);
module.exports = app;

