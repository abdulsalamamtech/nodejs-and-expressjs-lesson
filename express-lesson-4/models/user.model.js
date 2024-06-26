const express = require('express');
const mongoose = require('mongoose');
require('../configs/db.config');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: false
    },
    value: {
        type: String,
        required: false
    },
    reason: {
        type: String,
        required: false
    }
});


modelName = 'users';

if (mongoose.models[modelName]) {
    // If the model already exists, use the existing model
    module.exports = mongoose.models[modelName];
} else {
// Otherwise, compile a new model
module.exports = mongoose.model(modelName, userSchema);
}
