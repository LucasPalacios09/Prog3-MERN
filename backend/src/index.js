const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
//Routes
app.use(require('./routes/routes'));
app.use(require('./routes/userroute'));
//Static Files

// server starting
app.listen(app.get('port'), ()=> {
    console.log(`Server is connected on port ${app.get('port')}`);
});