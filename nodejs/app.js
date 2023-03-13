require("dotenv").config();
var express = require('express');
var app = express();

const port = process.env.PORT || 3000;
var p = process.env.PORT;
///console.log(process.env)  ;

app.use(express.static('public'));
////console.log(process.env.NODE_ENV  )  ;
app.get('/a',function(req,res){
    res.send('asf');
});
app.listen(p,function(err){
console.log('server is running port:'+ p);
});


