const mongoose = require('mongoose');
const mongoURI ="mongodb://localhost:27017"     //declaring mongodb link URL

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log(" connected to mongoose sucessfully");
    })
}

module.exports = connectToMongo;    //to export this module 
