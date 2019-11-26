var express = require('express');
var path = require('path');
var body_parser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var cors = require('cors');

var app = express();
app.use(cors());

//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
//EJS : Embedded javascript templeting
//It's a simple templeting language that lets you generate HTML markup with plain javascript

//set static folder
app.set(express.static(path.join(__dirname,'client')));
//creates static folder named client

//body parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended : false }));

app.use('/',index);
app.use('/api',tasks);


app.listen(8080, function() {
    console.log('Server started');
});
