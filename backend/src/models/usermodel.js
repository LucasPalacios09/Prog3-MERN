const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
    avatar: { type: String },
    score: { type: Number }
})

module.exports = mongoose.model('Users', UserSchema);
