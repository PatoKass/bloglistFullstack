const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
})

commentSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Comment', commentSchema)
