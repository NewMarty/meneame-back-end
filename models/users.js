const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true} }, {
    timestamps: { createdAt: 'created_at'}
  }
)

let UserModel = mongoose.model('User',  userSchema)

module.exports = UserModel