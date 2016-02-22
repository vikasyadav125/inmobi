function ss(){
var mongodb = require('mongodb');
var assert = require("assert");
var artRRTags; var adRRTags;
var artDone = false; var adDone = false;
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/inmobi';

function someFn(){
	//console.log(artRRTags);
	console.log(adRRTags);
}

var AdTags = function(db) {
   db.collection('addstore', function(err, collection){
	collection.find(function(err, cursor){
	adRRTags = cursor;
	adDone = true;
	if(artDone && adDone)
		someFn();
	return;
	
	});
   });
};

MongoClient.connect(url, function(err, db) {
 AdTags(db);
	db.close();
});

var ArticleTags = function(db) {
   db.airtcle.findOne( {"airtcle_id" : "1234343"}, function(err, cursor){
	artRRTags=cursor;
	artDone = true;
	if(artDone && adDone)
		someFn();
	return;
	}
   );
};

MongoClient.connect(url, function(err, db) {
	 ArticleTags(db);
	db.close();
});
};
ss()
