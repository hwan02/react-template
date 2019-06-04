const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');

const path = require('path');
// const fs = require('fs');
// const has = require('has');
// const os = require('os');
const http = require('http');
// const https = require('https');
// const mongoose = require('mongoose');

const port1 = 80;
// const port2 = 3000;
const tempDir = `${__dirname}/temp_files/`;
// const mongoURI = '';

app.use(express.static(path.resolve('public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(tempDir));

if (app.get('env') == 'development') {
    app.use(errorHandler());
}

process.on('uncaughtException', (err) => {
    console.log(err.stack);
});

const mainRouter = require('./routes/index');

app.use(express.static('public'));
app.use('/', mainRouter);

http.createServer(app).listen(port1, () => {
    console.log(`Express server listening on port ${port1}`);
});
