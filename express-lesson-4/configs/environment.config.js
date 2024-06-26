const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const environment = {};

environment.APP_NAME = process.env.APP_NAME || "Node | Express Application"
environment.APP_DEBUG = process.env.APP_DEBUG || false
environment.PORT = process.env.PORT || 3000


environment.DATABASE_USERNAME = process.env.DATABASE_USERNAME || ""
environment.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || ""
environment.DATABASE_NAME = process.env.DATABASE_NAME || ""
environment.MONGODB_URL = process.env.MONGODB_URL || ""


console.log(environment.APP_NAME);


module.exports = environment;