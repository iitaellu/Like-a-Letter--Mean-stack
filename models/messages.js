const mongoose = require('mongoose');
const config = require('../config/database');
//const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

let messageSchema = new Schema({
    sender: String,
    recipient: {
        type: String,
        required: true
    },
    topic:{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Message", messageSchema)