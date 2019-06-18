const mongoose = require('mongoose')
const Schema = mongoose.Schema
let CommentModel = mongoose.model('Comment', commentSchema)

let commentSchema = new Schema ({
  message: {type: String, required: true},
  userId: {type: String, required: true},
  articleId: {type: String, required: true} }, {
    timestamps: {createdAt: 'created_at'}
  }
)

module.exports = CommentModel