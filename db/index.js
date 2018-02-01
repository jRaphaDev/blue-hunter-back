import seeder from 'mongoose-seed';

import data from './seeds/user.js';

seeder.connect(`mongodb://localhost/${process.env.DB_HOSTNAME}`, () => {

  seeder.loadModels([
    './models/user.js'
  ]);

  seeder.clearModels(['User'], () => {
    seeder.populateModels(data, () => {});
  });

});

module.exports = { seeder };