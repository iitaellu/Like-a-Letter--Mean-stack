const mongoose = require('mongoose');
const config = require('../config/database');
//const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

let messageSchema = new Schema({
    sender: String,
    recipient: String,
    topic: String,
    message: String,
    status: String
})

module.exports = mongoose.model("Message", messageSchema)