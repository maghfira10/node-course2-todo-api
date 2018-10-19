onst MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
         return console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB Server');
        const db = client.db('TodoApp');

        // db.collection('Todos').insertOne({
        //     test : 'Something to do',
        //     completed : false
        // }, (err, result) => {
        //     if (err) {
        //         return console.log('Unable to insert todo', err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

        //Insert new doc into Users  (name, age, location)
       db.collection('Users').insertOne({
    
           name : 'Cahaya Kejora',
           age : '10',
           location : 'Venus'
       }, (err, result) => {
           if ( err ) {
               return console.log('Unable to insert user' , err); 
           }
           console.log(result.ops);
       })
        client.close();
})