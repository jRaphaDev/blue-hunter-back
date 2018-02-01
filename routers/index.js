import express from 'express';
import userController from '../controllers/user';
import bookController from '../controllers/book';

var router = express.Router();

router
  // user
  .get('/user/by-name/:name', userController.findUserByName)

  // book
  .get('/book/by-title/:title', bookController.findBookByTitle)
  .get('/book/by-author/:author', bookController.findBookByAuthor);

module.exports = router;