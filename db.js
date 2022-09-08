/*
This file is just to connect with the database


*/



const mongoose = require('mongoose');    //here mongoose help to manage database in mongodb otherwise it is very hectic  
const mongoURI ="mongodb://localhost:27017"     //declaring mongodb link URL
//only need to change this connect string - (mongoUri) if you want to connect any other surver

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log(" connected to mongoose sucessfully");
    })
}

module.exports = connectToMongo;    //to export this module 
