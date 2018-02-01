import mongoose from 'mongoose';

let Schema = mongoose.Schema;

// create a schema
const bookSchema = new Schema({
  title: String,
  author: String,
  updated_at: Date
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;