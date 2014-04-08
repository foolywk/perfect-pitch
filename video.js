var config = require('./mongoConfig');
var mongoose = config.mongoose;
var db = config.connect();

var User = require('./user.js');
var Schema = mongoose.Schema;

var Video = new Schema({
	id: String,
	title: String,
	publishedAt: Date,
	description: String,
	categoroy: String
	// owner: User
});

module.exports = db.model('Video', Video);