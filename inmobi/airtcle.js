var MongoClient = require("mongodb").MongoClient; 
var assert = require("assert");
var ObjectId = require('mongodb').ObjectID;
var url= 'mongodb://localhost:27017/inmobi';
var usersCollection = 'airtcle';


MongoClient.connect(url, function (err,db) {
		var updateairtcle = function(db, callback) {
   db.collection(usersCollection).updateMany(
      { "airtcleID" : "1234343" },
      {
        $set: { "text": "American (New)" },
	$push: {"tags":"value1"}
      }, function (err, numUpdated) {
  if (err) {
    console.log(err);
  } else if (numUpdated) {
    console.log('Updated Successfully %s document(s).', numUpdated);
  } else {
    console.log('No document found with defined "find" criteria!');
  } 
});
};
db.close();
});
		


