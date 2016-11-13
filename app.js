`use strict`;
var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser');

var app = express();
app.listen(3000,()=>{
  console.log('listening on 3000')
});
app.use(bodyParser.urlencoded({extended: true}));

app.post('/slack',(req,res)=>{
  res.send({text:'looking for gifs about: '+req.body.text});
  request({
    method:'POST',
    url: process.env.url, //AWS lambda url
    form: req.body,
  },(err,res,body)=>{
    console.log(res.statusCode);
    })
});
