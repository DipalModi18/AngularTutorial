var express = require('express');
var path = require('path');
var router = express.Router();
var body_parser = require('body-parser');

router.use(body_parser.json());

router.get('/tasks', function(req,res,next) {
    res.send('IN TASKS API');
    res.json({
        'user' : 'dipal',
        'password' : 'modi'
    })
    console.log(req.body.number);
});

router.post('/tasks', function(req, res, next) {
    var square =req.body.num*req.body.num;
    console.log('Number :'+req.body.num+" Square :"+square);
    //res.render('index.html');
    //res.send(square);
    //res.sendFile(path.join(__dirname,'index.js'));
    var json = JSON.stringify(square);
    console.log('var json :'+json);
    res.json(json);
})

module.exports = router;