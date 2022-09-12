const mongoose = require('mongoose');
const { Schema } = mongoose;

// import mongoose from 'mongoose';
// const { Schema } = mongoose; //we can gerate schematic for how we want to store data

const userSchema = new Schema({
  name: {
    type: String,
    reaquired: true
  },
  email: {
    type: String,
    reaquired: true,
    unique: true
  },
  password: {
    type: String,
    reaquired: true
  },

  date: {
    type: String,
    default: Date.now
  },

  }
);


const User = mongoose.model('User', userSchema );  //moongoose.model ('modelname', schematic)



module.exports = User;
