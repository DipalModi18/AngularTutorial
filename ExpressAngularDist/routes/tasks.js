var express = require('express');
var path = require('path');
var router = express.Router();
var body_parser = require('body-parser');

router.use(body_parser.json());

// router.get('/tasks', function(req,res,next) {
//     res.send('IN TASKS API');
//     res.json({
//         'user' : 'dipal',
//         'password' : 'modi'
//     })
//     console.log(req.body.number);
// });

router.post('/', function(req, res, next) {
    // console.log('username :'+req.body.username+' password :'+req,body.password);
    // var authenticated = true;
    // res.json(authenticated);
});

module.exports = router;