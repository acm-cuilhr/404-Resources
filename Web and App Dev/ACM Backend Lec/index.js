const express = require('express')
const app = express()
require("dotenv").config()
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes')

//middlewares
app.use(express.json())

const uri = process.env.URI;
const port = process.env.PORT || 3000;

mongoose.connect(uri)
  .then( () =>{
    console.log("Database connected");
    app.listen(port , ()=>{
        console.log(`App listening at port ${port}` );
    })
  } 
);

app.use("/",studentRoutes);





