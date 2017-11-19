const express = require('express');
const mongoose = require('mongoose');

const router = require('./router/router');

const port = process.env.port || 4100;
const app = express();

app.use('/api', router);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todo', { useMongoClient: true});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`); 
});