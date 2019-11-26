var express = require('express');
var path = require('path');
var body_parser = require('body-parser');
var session = require('express-session');
var cookie_parser = require('cookie-parser');

var app = express();
var sess;
//var tasks = require('./routes/tasks');
var cors = require('cors');
app.use(cors());

app.use(cookie_parser());
app.use(session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: false 
}));

//set static folder
app.set(express.static(path.join(__dirname,'FormApplication2')));

//body parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended : false }));



app.post('/register', function(req, res) {
    //var registered = true;
    console.log('User to register : username :'+req.body.username+" password :"+req.body.password);
    users.push(
        {
             name: req.body.name, 
             age: req.body.age,
             username : req.body.username,
             password : req.body.password
        });
        console.log('All Users are :')
        users.forEach(function (user) {
                console.log('Username :'+user.username+" password :"+user.password);
        });
        //console.log('Registration status :'+registered);
        //res.json(registered);
});




app.post('/user', function( req,res) {
    console.log('username :'+req.body.username+' password :'+req.body.password);
    var authenticated = false;
        users.forEach(function (user) {
            if(user.username == req.body.username && user.password == req.body.password)
            {
                authenticated = true;
            }
        });
        // var json = JSON.stringify(authenticated);
        // console.log('Authenticated :'+authenticated+" JSON :"+json);

        //creating session
        req.session.username = req.body.username;
        console.log('Session created :'+req.session.username);
        console.log('secret :'+req.session.secret);
        sess = req.session;
        res.json(authenticated);
});




app.get('/profile', function(req,res) {
    //sess = req.session;
    console.log('Session using :'+req.session.username);
    console.log('fetching profile of :'+sess.username);
    var user_details;
    users.forEach(function (user) {
        if(user.username == sess.username)
        {
           user_details =
            {
                "name" : user.name,
                "age" : user.age,
                "username" : sess.username,
                "password" : user.password
            };
        }
    });
    console.log('User_details :'+user_details.name);
    var json = JSON.stringify(user_details);
    res.json(user_details);
});




app.post('/edit', function(req,res) {
    console.log('Editing name :'+req.body.name+' age :'+req.body.age+' username :'+req.body.username+' password :'+req.body.password);
    users.forEach(function (user) {
        if(user.username == req.body.username)
        {
           user.name = req.body.name;
           user.age = req.body.age;
           user.password = req.body.password;
        }
    });
    console.log('All Users are :')
        users.forEach(function (user) {
                console.log('name :'+user.name+" age :"+user.age+" Username :"+user.username+" password :"+user.password);
        });
});




app.get('/logout', function(req,res) {
    console.log('logging out');
    //sess.username = null;

    req.session.destroy(function(err)
    {
        if(err) 
        {
          console.log(err);
        } 
        else 
        {
          //res.redirect('/');
        }
      });
    
});

users = [
    {
        name : 'dipal',
        age : 21,
        username :'dipal',
        password : 'modi'
    },
    {
        name : 'ekta',
        age : 21,
        username : 'ekta',
        password : 'gavas'
    }
];


app.listen(8080, function() {
    console.log('Server started');
});


