var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/inmobi';
var abc={};
var articlestag=function(db,callback){
    db.collection('airtcles').find({"airtcleId":"wikid"},{"tags":1,"_id":0}).toArray(function (err, result) {
      assert.equal(err,null);
	console.log(result);
      	function(){
	
}
    });
  };

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  articlestag(err, function() {
	
      db.close();
  });
});

