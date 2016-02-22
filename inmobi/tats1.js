var express = require("express"); 
var http = require("http");
var util = require("util");
var MongoClient = require("mongodb").MongoClient; 
var assert = require("assert");
var ObjectId = require('mongodb').ObjectID;
var url= 'mongodb://localhost:27017/inmobi';
var usersCollection = 'users';
var PythonShell = require('python-shell');

var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

app.use(express.static("./public"));

/*
Establishing Mongo Connection
*/



var indexmail = function(db, callback) {
   db.collection(usersCollection).createIndex(
      { "email": 1},{ unique:true},                                                            
      function(err,results) {
         callback();
      }
   );
};
/*
Running Python Script Tagger from here
*/


function generateTags(text){
	var tags;
	var options = {
		args: [text]
	};
	PythonShell.run('taggers/tagger.py', options,function (err, results) {
		if (err) {			
		}
		tags = results;
	});
	return tags;
}



io.on('connection', function(socket,db){
	
	/*
	Various event listeners for the app
	*/
	socket.on('signIn', function (obj) {
		var email = obj.email;
		var latitude = obj.latitude;
		var longitude = obj.longitude;
		util.log(email + " just connected !!");
		//Add code for inserting or updating user
			MongoClient.connect(url, function (err,db) {
				
			db.collection(usersCollection).insert({'email':email,'latitude':latitude,'longitude':longitude});
				indexmail(db, function() {
                                 assert.equal(null, err);
				db.close();
					});
				});
	});
	
	socket.on('bootstrap', function (articleList) {
		
	});
	
	/*
	User closes an app
	*/
	socket.on('disconnect', function(){
		util.log('user disconnected');
	});
	
});
server.listen(3000, function(){
	console.log('News Digest Starting on *:3000');
});




