//***Import Packages****//
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');


//****Initialize****//
const app = express();
const port  = process.env.PORT;
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));


//****Registe Routes******//
const authRoutes = require("./routes/auth");



//***Database***//
connectDB();

//****Set Routes******//

app.use("/api/auth",authRoutes);


//*****Listen******//
app.listen(port,()=>{
    console.log(`Listening on port No ${port}`.bgWhite.white);
})