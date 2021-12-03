const mongoose = require('mongoose');

const URI = 'mongodb://localhost/finalProg3'

mongoose.connect(URI)
.then(db => console.log('Database is connected'))
.catch(err => console.error(err));