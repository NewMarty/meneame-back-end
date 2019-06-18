const mongoose = require('mongoose')
const Schema = mongoose.Schema

let articleSchema = new Schema ({
  description: {type: String, required: true},
  title: {type: String, required: true},
  url: {type: String, required: true},
  userId: {type: Schema.ObjectId, ref: 'User'} 
  }, {
    timestamps: {createdAt: 'created_at'}
  }
)

let ArticleModel = mongoose.model('Article', articleSchema)

module.exports = ArticleModel