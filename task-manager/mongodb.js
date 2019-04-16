<<<<<<< HEAD
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectioneURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

mongoClient.connect(connectioneURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        console.log(error);
        return console.log('Unable to connect to database');
    }
    console.log('connected to database successfully');
    const db = client.db(databaseName);

    // 1. CREATING/INSERTING New Data into the Database.
    // db.collection('users').insertOne({
    //     name:'Rachel',
    //     age:24
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
        
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean My Room',
    //         completed:'false'
    //     },
    //     {
    //         description: 'Trim Beard',
    //         completed:'false'            
    //     },
    //     {
    //         description: 'No ice cream for me',
    //         completed:'true'
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert the documents');
    //     }
    //     console.log(result.ops);
    // });

    // 2. Reading data from the database.

    db.collection('users').findOne({name: 'Fame'}, (error, result)=>{
        if(error){
            console.log('Unable to fetch the document');
        }
        console.log(result);        
    })

    // Reading a specific data by its ObjectId

    db.collection('users').findOne({_id: new ObjectID("5ca4ef4dfa5f038ff8d772b6")}, (error, result)=>{
        if(error){
            console.log('Unable to fetch the document');
        }
        console.log(result);        
    })

    // Reading/Fetcing multiple documents
    db.collection('tasks').find({completed: 'false' }).toArray((error, results)=>{
        if(error){
            return console.log('Unable to fetch results');        
        }
        console.log(results);
    })
    
})
   


=======
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectioneURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

mongoClient.connect(connectioneURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        console.log(error);
        return console.log('Unable to connect to database');
    }
    console.log('connected to database successfully');
    const db = client.db(databaseName);

    // 1. CREATING/INSERTING New Data into the Database.
    // db.collection('users').insertOne({
    //     name:'Rachel',
    //     age:24
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
        
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean My Room',
    //         completed:'false'
    //     },
    //     {
    //         description: 'Trim Beard',
    //         completed:'false'            
    //     },
    //     {
    //         description: 'No ice cream for me',
    //         completed:'true'
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert the documents');
    //     }
    //     console.log(result.ops);
    // });

    // 2. Reading data from the database.

    db.collection('users').findOne({name: 'Fame'}, (error, result)=>{
        if(error){
            console.log('Unable to fetch the document');
        }
        console.log(result);        
    })

    // Reading a specific data by its ObjectId

    db.collection('users').findOne({_id: new ObjectID("5ca4ef4dfa5f038ff8d772b6")}, (error, result)=>{
        if(error){
            console.log('Unable to fetch the document');
        }
        console.log(result);        
    })

    // Reading/Fetcing multiple documents
    db.collection('tasks').find({completed: 'false' }).toArray((error, results)=>{
        if(error){
            return console.log('Unable to fetch results');        
        }
        console.log(results);
    })
    
})
   


>>>>>>> 7a38cb2bd3f1fee77f0a0555c4e4e346c1ad96a7
