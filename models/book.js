import mongoose from 'mongoose';

let Schema = mongoose.Schema;

// create a schema
const bookSchema = new Schema({
  title: String,
  author: String,
  created_at: Date,
  updated_at: Date
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;