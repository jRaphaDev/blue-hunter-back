import seeder from 'mongoose-seed';

import data from './seeds/user.js';
import book from './seeds/book.js';

seeder.connect(`mongodb://localhost/${process.env.DB_HOSTNAME}`, () => {

  seeder.loadModels([
    './models/user.js',
    './models/book.js'
  ]);

  seeder.clearModels(['User', 'Book'], () => {
    seeder.populateModels(data, () => {});
  });

});

module.exports = { seeder };