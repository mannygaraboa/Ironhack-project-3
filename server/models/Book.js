const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name:String,
  userId: {
    type:Schema.Types.ObjectId,
    ref:"User"
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
