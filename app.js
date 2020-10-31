const express = require('express');


require('dotenv').config();


const app=express();

//EJS

app.set('view engine','ejs');

//body-parser
app.use(express.urlencoded({ extended: true }));


//adding static files like css
app.use('/',express.static(__dirname+"/assets"))


app.get('/',function(req,res){
    res.render('index');
})

app.listen(5000,console.log('Server is connected to 5000'))