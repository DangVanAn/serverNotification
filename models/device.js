var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var deviceSchema = mongoose.Schema({ 

	deviceName 		: String,
	deviceId		: String, 
	registrationId	: String
	
});

mongoose.connect('mongodb://mshipper1:12345678@ds129090.mlab.com:29090/mshipper');
var dbMongo = mongoose.connection;
dbMongo.on('error', console.error.bind(console, 'connection error:'));
dbMongo.once('open', function () {
    console.log('MongoDb connect');
});
module.exports = mongoose.model('device', deviceSchema);        