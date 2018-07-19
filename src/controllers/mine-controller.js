var mongoose = require('mongoose');

var mine = require('../models/mine')
exports.mines= function(req,res, next){
    console.log("called");
    var arr = [];
    mine.find({}, function(err, mines){
        console.log("in");
        if (err) throw res.send(err);
    
        return res.send(mines);//.toString();
    })

};


