const express=require('express')
const app=express()
const bodyParser=require('body-parser');
const port=8080

//Define static files
app.use(express.static('public'));


//Define view engine
app.set('view engine', 'ejs');


/* Parse incoming request bodies
in a middleware before your handlers,
available under the req.body property.
*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

module.exports= {express,app,port};