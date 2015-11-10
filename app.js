'use strict';

var express = require('express');
var jade = require('jade');
var parse = require('body-parser');
var marked = require('marked');

var app = express();

app.use(parse.urlencoded({extended:true}));
app.use(parse.json());
app.set('view engine','jade');

app.use(express.static('front'));

app.get('/', function (req,res){
  res.render('index');
});

app.post('/', function (req, res){
  var converted = marked(req.body.markdown);
  res.send(converted);
});



app.listen(process.env.PORT || 3000);
