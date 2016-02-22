	                  
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

var insertBook = function(db){
	           db.collection(myCollection).find({isbn: isbn},{},{}).toArray(
	             function(err, docs){
	               if ( docs.length > 0){
	                 console.log("Book with ISBN " + isbn + " already exists");
	                 printMenu(dbConn);
	               }else{
	                 db.collection(myCollection).insert({
	                    'id':bookName,
	                    'isbn': isbn,
	                    'author': author,
	                    'pages': pageCount
	                  }, bookInsertHandler);
	               }
	             }
	           );
	}
