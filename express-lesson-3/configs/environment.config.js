const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const environment = {};

// Port
environment.port = process.env.PORT;

// Mongodb url
environment.mongodbUrl = process.env.MONGO_DB_URL;







module.exports = environment;