import express from 'express'
import configviewEngine from "./config/viewEngine"
import initWebRoute from "./route/web.js"
import initApiRoute from "./route/api.js"

const bodyParser = require('body-parser');
// import connection from "./config/connectDB.js"
require("dotenv").config()
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set up view engine
configviewEngine(app)

//init web route
initWebRoute(app)


//init api route
initApiRoute(app)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("server is running http://localhost:" + port);
})