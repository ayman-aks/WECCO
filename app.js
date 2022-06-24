const {express,app,port}=require('./config/config');
const routes = require("./web").router;
const db = require('./config/db');

//Define the routes for static file
app.use("/assets",express.static('public'))


//Define all routes in web.js
app.use("/", routes)

db.sequelize.sync();
//Default port is 8080.
//We can change it in config/config.js
app.listen(port);