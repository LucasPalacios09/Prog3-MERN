const express = require('express');
const morgan = require('morgan')
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/routes'));
//Static Files

// server starting
app.listen(app.get('port'), ()=> {
    console.log(`Database is connected on port ${app.get('port')}`);
});