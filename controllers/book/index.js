import * as service from '../../services/book';

const findBookByTitle = (req, res) => {

  const title = req.params.title;

  service.findBookByTitle(title).then(book => {

    if (book) {
      console.log('book found')
      return res.status(200).send(book);
    }

    console.log('no content books')
    return res.status(204).send(book);

  }).catch(err => {
    console.log(`errs: ${err}.`);
    return res.status(500).send({ data: err });
  })

}

const findBookByAuthor = (req, res) => {
  console.log(req.params)
  return res.status(200).send({ data: `Everything ok by author !!! ` });
}

module.exports = { findBookByTitle, findBookByAuthor };