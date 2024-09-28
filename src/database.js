const mongoose = require('mongoose');

const connectDB = async () =>{
   await mongoose.connect("mongodb+srv://amangarg24071995:L4T4E6IPLgzL2OYG@amaya.kzmpo.mongodb.net/techTinder");
};



module.exports = connectDB ;