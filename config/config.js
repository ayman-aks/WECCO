const express=require('express')
const app=express()
const bodyParser=require('body-parser');
const port=8080

//Define static files
app.use(express.static('public'));
const cors = require('cors');
let corsOptions = {
    origin: "http://localhost:4200" // URL of the frontend
};
app.use(cors(corsOptions));
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true }));

//Define view engine
app.set('view engine', 'ejs');


/* Parse incoming request bodies
in a middleware before your handlers,
available under the req.body property.
*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

module.exports= {express,app,port};