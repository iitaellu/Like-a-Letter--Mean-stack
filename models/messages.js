const mongoose = require('mongoose');
const config = require('../config/database');
//const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

let messageSchema = new Schema({
    person1: String,
    person2: String,
    topic: String,
    message: []
})

module.exports = mongoose.model("Message", messageSchema)