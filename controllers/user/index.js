import * as service from '../../services/user';

function findUserByName (req, res) {
  
  const name = req.params.name;

  service.findUserByName(name).then( user=> {

    if (user.length) {
      console.log(`was found ${user.length} user(s) with name: ${name}.`);
      return res.status(200).send(user);
    }

    console.log('no content users');
    return res.status(200).send([]);

  }).catch(err => {

    console.log(`err: ${err}.`);
    return res.status(500).send(err);

  });

};

module.exports = { findUserByName };