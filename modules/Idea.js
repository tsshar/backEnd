import mongoose from 'mongoose';

const { Schema } = mongoose; //we can gerate schematic for how we want to store data

const IdeaSchema = new Schema({
  title: {
    type: String,
    reaquired: true
  },
  description: {
    type: String,
    reaquired: true
  },
  price: {
    type: String,
    reaquired: true
  },

  tag: {
    type: String,
  },

  }
);

module.exports = mongoose.model(Idea, IdeaSchema );  //moongoose.model (modelname, schematic)
