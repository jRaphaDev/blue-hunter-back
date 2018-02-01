import mongoose from 'mongoose';
const url = `mongodb://localhost/${process.env.DB_HOSTNAME}`;

mongoose.connect(url);

let database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));

database.once('open', () => console.log('We are connected!!! \o/ mongoose... ') );