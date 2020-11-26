const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const redis = require('redis');


const app = express();
// views/templates folder and templating engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
//make body parser parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

// Add index endpoint
app.get('/', function(req, res){
    res.send('Welcome')
});

// start app
app.listen(3000);
console.log('Server Started On Port 3000...')
module.exports = app;

