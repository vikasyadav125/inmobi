//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
var assert = require("assert");

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/inmobi';
var Adtags={};
var Articletags={};
var i=0,k=0;


var AdTags = function(db, callback) {
   var cursor =db.collection('addstore').find( { "add_title": "newtitle"},{"tags":1,"_id":0} );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
	Adtags[i++]=doc;
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
   var allarticle =db.collection('article').find( { "articleId": 1} ).toArray();
if (allarticle.length > 0) { console.log(allarticle) }
console.log(allarticle);	
 AdTags(db, function() {
      db.close();
  });
});

var ArticleTags = function(db, callback) {
   var cursor =db.collection('airtcle').find( { "airtcle_id":"1234343"},{"tags":1,"_id":0} );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
	Articletags[k++]=doc;
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, erry
 ArticleTags(db, function() {
      db.close();
  });
});
 

