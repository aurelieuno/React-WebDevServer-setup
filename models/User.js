var mongoose = require('mongoose');
var configDB = require('../config/database.js');
var dbURL = configDB.url;

mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', function (err) {
  console.error('There was a db connection error');
  return  console.error(err.message);
});
db.once('connected', function () {
  return console.log('Successfully connected to ' + dbURL);
});
db.once('disconnected', function () {
  return console.error('Successfully disconnected from ' + dbURL);
});

var Schema = mongoose.Schema;

var UserModel = Schema(
  {
    name: {type: String, required: true, max: 100},
  }
);


//Export model
module.exports = mongoose.model('User', UserModel);