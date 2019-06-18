const mongoose = require('mongoose')
const Schema = mongoose.Schema

let commentSchema = new Schema ({
  message: {type: String, required: true},
  userId: {type: Schema.ObjectId, ref: 'User'},
  articleId: {type: Schema.ObjectId, ref: 'Article'} 
  }, {
    timestamps: {createdAt: 'created_at'}
  }
)

let CommentModel = mongoose.model('Comment', commentSchema)

module.exports = CommentModel