var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var mineSchema = new Schema({
            name: String,
            state: String,
            nearestTown: String,
            opName: String,
            lat: Number,
            long: Number
        }, {collection: 'mines'});
 
var mine = mongoose.model('mine', mineSchema);

module.exports= mine;
