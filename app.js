const messageController=require('./controllers/messageController')

const {express,app,port}=require('./config/config'),
    routes = require("./web").router;

//Define the routes for static file
app.use("/assets",express.static('public'))


//Define all routes in web.js
app.use("/", routes)

const db = require('./config/db');
db.sequelize.sync();
//Default port is 8080.
//We can change it in config/config.js
app.listen(port);