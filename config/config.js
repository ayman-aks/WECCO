const express=require('express')
const app=express()
const bodyParser=require('body-parser');
const port=8080
const APP_URL = `http://localhost:${port}`;
// const cookieParser = require("cookie-parser");
// const sessions = require('express-session');
//Define static files
app.use(express.static('public'));
const cors = require('cors');
let corsOptions = {
    origin: "http://localhost:8080" // URL of the frontend
};
app.use(cors(corsOptions));
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser);
// app.use(sessions({
//     secret: "thisisdskdhjhfrirfswkcnfggsksksjksjksk",
//     saveUninitialized:true,
//     cookie: { 
//         maxAge: 1000*60*60*24,
//         expires: Date.now() + 1000*60*60*24, 
//         secure: true,
//     },
//     resave: false
// }));

//Define view engine
app.set('view engine', 'ejs');


/* Parse incoming request bodies
in a middleware before your handlers,
available under the req.body property.
*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

module.exports= {express,app,port};