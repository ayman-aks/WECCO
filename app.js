const routesCustomer=require('./controller/CreateCustomer')
const routesIndex=require('./controller/index')
const routesShop=require('./controller/shop')
const {express,app,port}=require('./config/config');

//set the engine view
app.set('view engine', 'ejs');

//Define the routes for static file
app.use("/assets",express.static('public'))


//Define routes of the cutomer
app.use("/customer",routesCustomer.router)


//Define route of the index page
app.use("/",routesIndex.router)


//Define route of the shop page
app.use("/shop",routesShop.router)


//Default port is 8080.
//We can change it in config/config.js
app.listen(port);