const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ArticleModel = mongoose.model('Article', articleSchema)

let articleSchema = new Schema ({
  description: {type: String, required: true},
  title: {type: String, required: true},
  url: {type: String, required: true},
  userId: {type: String, required: true} }, {
    timestamps: {createdAt: 'created_at'}
  }
)

module.exports = ArticleModel