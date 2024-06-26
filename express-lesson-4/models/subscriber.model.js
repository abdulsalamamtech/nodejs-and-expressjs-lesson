const express = require('express');
const mongoose = require('mongoose');
require('../configs/db.config');


const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        default: Date.now()
    }

});


modelName ='subscribers';

if (mongoose.models[modelName]) {
    // If the model already exists, use the existing model
    module.exports = mongoose.models[modelName];
} else {
    // Otherwise, compile a new model
    module.exports = mongoose.model(modelName, subscriberSchema);
}
