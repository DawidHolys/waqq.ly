
var path = require('path');
var express = require('express');
var mongodb = require('mongodb');
const { info } = require('console');

var app = express();

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:5050');

app.use(bodyParser.urlencoded({ extended: false}));

// Post Function to send Files
app.post('/Send-Files', function (req, res){
    dbConn.then(function(db){
        delete req.body._id;
        db.collection('Information').insertOne(req.body);
    });
    res.send('Data Received:\n' + JSON.stringify(req.body));
});

app.get('/Receive-Files', function(req, res){
    dbConn.then(function(db){
        db.collection('Information').find({}).toArray().then(function(Information){
            res.status(200).json(Information);
        });
    });
});