import User from '../models/user';

const findUserByName = (name) => {

  return User.find({ name: { $regex: new RegExp(name, "ig") } },
    (err, user) => {
      if (err) throw err;
      return user;
    });

};

module.exports = { findUserByName };
