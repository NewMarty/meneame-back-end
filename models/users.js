const mongoose = require('mongoose')
const Schema = mongoose.Schema
let UserModel = mongoose.model('User',  userSchema)

const userSchema = new Schema ({
  name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true} }, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

module.exports = UserModel