const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/toDoList_db');

const db = mongoose.connection;

db.once('error', console.error.bind(console, 'Error in setting up database'));

db.on('open', () => {
    console.log('Database is connected successfully');
})

module.exports = db;