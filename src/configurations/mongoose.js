var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/myMines');

mongoose.connection.once('open', function callback() {
    console.log("DB connected " + 'mongodb://localhost:27017/myMines' + " at " + new Date());
});

mongoose.set('debug', true);


mongoose.connection.on('open', function callback() {});

mongoose.connection.on('error', function () {
    setTimeout(function () {
        if (mongoose.connection.readyState === 0) {
            db = mongoose.connect('mongodb://localhost:27017/myMines');
        }
    }, 1000);
});

mongoose.connection.on('disconnected', function () {
    setTimeout(function () {
        if (mongoose.connection.readyState === 0) {
            db = mongoose.connect('mongodb://localhost:27017/myMines');
        }
    }, 1000);
});