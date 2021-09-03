const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000;

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use(require('./routes/api'));
app.use(require('./routes/view'));

app.listen(PORT, () => {
    console.log(`is this WORKING!?!?! ON PORT ${PORT}`);
});