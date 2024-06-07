const express = require('express');
const { readFile } = require('fs');
const app = express();

var path = require('path');
var mongodb = require('mongodb');
const { info } = require('console');

app.get('/', (Request, Response) => {

    readFile('./home.html', 'utf8', (err, html) => {

        if (err) {
            Response.status(500).send('sorry, out of order')
        }

        Response.send(html);

    })
});

app.get('/DogWalkerSignUp', (Request, Response) => {

    readFile('./DogWalkersSignUp.html', 'utf8', (err, html) => {

        if (err) {
            Response.status(500).send('sorry, out of order')
        }

        Response.send(html);

    })
});

app.get('/DogOwnerSignUp', (Request, Response) => {

    readFile('./DogOwnersSignUp.html', 'utf8', (err, html) => {

        if (err) {
            Response.status(500).send('sorry, out of order')
        }

        Response.send(html);

    })
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))