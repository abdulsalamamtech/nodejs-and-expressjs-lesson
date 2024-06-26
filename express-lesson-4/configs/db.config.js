const express = require('express');
const mongoose = require('mongoose');

const environment = require('./environment.config');


// Establish a Connection
mongoose.connect(`mongodb+srv://${environment.DATABASE_USERNAME}:${environment.DATABASE_PASSWORD}@amtech-cluster.7nysyaw.mongodb.net/${environment.DATABASE_NAME}`, {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
  maxPoolSize: 10,
}).then(() => {
  console.log('Connected to MongoDB');
console.log(environment.MONGODB_URL );

})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


// Handling Connection Events
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});


// Close the ConnectionWhen your application exits
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
      console.log('Mongoose connection is disconnected due to application termination');
      process.exit(0);
  });
});


// Debugging
mongoose.set('debug', environment.APP_DEBUG);
