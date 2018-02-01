import Book from '../models/book';

const findBookByTitle = (title) => {
  
  return Book.find({ title: { $regex: new RegExp(title, "ig") } }, (err, book) => {
    if (err) throw err;
    return book;
  });

};

module.exports = { findBookByTitle };