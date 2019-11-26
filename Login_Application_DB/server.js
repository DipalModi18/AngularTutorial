var express = require('express');
var path = require('path');
var body_parser = require('body-parser');
var session = require('express-session');
//var cookie_parser = require('cookie-parser');
var mysql = require('mysql');
var http = require('http');
var keys = require('./config/keys');

var server = http.createServer(app);
var app = express();
var sess;
//var tasks = require('./routes/tasks');
var cors = require('cors');
//app.use(cors());

app.use(cors({origin: [
  "http://localhost:4200"
], credentials: true}));

//app.use(cookie_parser());
//EXPRESS-SESSION
// Since version 1.5.0, the cookie-parser middleware no longer needs to be used for this module to work. 
//This module now directly reads and writes cookies on req/res. Using cookie-parser may result in issues if the secret is not the same between this module and cookie-parser.
app.use(session({
    secret: "Shh, its a secret!",
    resave: false, //Forces the session to be saved back to the session store, even if the session was never modified during the request.
    saveUninitialized: true , //Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
    cookie : { 
        secure : false,
        httpOnly : true,
        maxAge : 1000*60*60*24
    }
}));


//body parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended : false }));


//mysql
var con = mysql.createConnection({
    host : keys.db.host,
    user : keys.db.user,
    password : keys.db.password,
    database : keys.db.database
});
con.connect( function(err) {
    if (err) throw err;
    console.log('Connected to database');
});



app.post('/register', function(req, res) {
    console.log();
    console.log('User to register : username :'+req.body.username+" password :"+req.body.password);

        var sql = "insert into users values('"+req.body.name+"',"+req.body.age+",'"+req.body.username+"','"+req.body.password+"');";
        con.query(sql, function(err, result) {
            if (err) 
            {
                if(err.errno == 1062)
                {
                console.log();
                console.log('Duplicate entry detected!!');
                res.status(500).send('Duplicate key!!'); //500 Internal Server Error
                //The server encountered an unexpected condition which prevented it from fulfilling the request.
                }
                else
                {
                    throw err;
                }
            } 
            else
            {
                console.log('database updated: Affected rows :'+result.affectedRows);
            }
        });
});




app.post('/user', function( req,res) {
    console.log();
    console.log('username :'+req.body.username+' password :'+req.body.password);
    var authenticated = false;

        var sql = "select username from users where username='"+req.body.username+"' and password='"+req.body.password+"';";
        con.query(sql, function(err, result) {
            if (err) throw err;
            if(result[0]!=null)
            {
                //user exists if query returns username
                console.log('User exists!!');
                console.log(result[0].username);
                authenticated = true;
                //creating session
                req.session.username = req.body.username;
               
                console.log('Session created :'+req.session.username)
                console.log('expires in: ' + (req.session.cookie.maxAge / 1000));
                console.log('Session ID :'+req.sessionID);
                //console.log('secret :'+req.session.secret);
                console.log('Authenticated :'+authenticated+" after creating session");
                sess = req.session;
                res.json(authenticated);
            }
            else
            {
                console.log('User does not exists!!');
                res.json(authenticated);
            }
            console.log('Authenticated :'+authenticated+' after if and else');
        });
        
});




app.get('/profile', function(req,res) {
    //sess = req.session;
    var user_details;
    if(req.session.username)
    {
        console.log();
    console.log('Session using :'+req.session.username);
    console.log('Session ID :'+req.sessionID);
    console.log('fetching profile of :'+req.session.username);

        //fetching user details
    var sql = "select * from users where username='"+req.session.username+"';";
    
    con.query( sql, function(err, result, fields) {
        if (err) throw err;
        console.log(result[0]);
        user_details =
            {
                "name" : result[0].name,
                "age" : result[0].age,
                "username" : result[0].username,
                "password" : result[0].password
            };
            //var json = JSON.stringify(user_details);
            res.json(user_details);
    });
    }
    else
    {
        //alert('User session not exists!!');
        user_details =
            {
                "name" : "",
                "age" : "",
                "username" : "",
                "password" : ""
            };
            res.json(user_details);
    }

}); 




app.post('/edit', function(req,res) {
    console.log();
    console.log('Editing name :'+req.body.name+' age :'+req.body.age+' username :'+req.body.username+' password :'+req.body.password);

    var sql = "update users set name='"+req.body.name+"' , age="+req.body.age+" , password='"+req.body.password+"' where username='"+req.body.username+"';";
    con.query( sql, function(err, result) {
        if (err) throw err;
        console.log('Details updated successfully!!');
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
          console.log('Session destroyed!!');
        }
      });
});

// // catch ctrl+c event and exit normally
process.on('SIGINT', function () {
    console.log();
    con.end();
    console.log('connection ended!!');
    process.exit(2);
  });

 // do app specific cleaning before exiting
 process.on('exit', function () {
    process.emit('cleanup');
  });

//catch uncaught exceptions, trace, then exit normally
process.on('uncaughtException', function(e) {
    console.log();
    console.log('Uncaught Exception...');
    con.end();
    console.log('connection ended!!');
    console.log(e.stack);
    process.exit(99);
  });


app.listen(8080, function() {
    console.log('Server started');
});



