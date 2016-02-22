//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/inmobi';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('airtcle');

    // Insert some users
    collection.find({'airtcle_id': '1234343'}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length>0 && result) {
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
	collection.insert({'airtcle_id': "1234343" ,"text": "American (New)","tags":["value1","value2","value3","value4"]});
      }
      //Close connection
      db.close();
    });
  }
});
