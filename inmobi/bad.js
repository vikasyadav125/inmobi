//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
var assert = require("assert");

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/inmobi';



var AdTags = function(db, callback) {
   var cursor =db.collection('addstore').find();
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
 AdTags(db, function() {
      db.close();
  });
});

