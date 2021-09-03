const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}
);

app.use(require('./routes/api'));
app.use(require('./routes/view'));

app.listen(PORT, () => {
    console.log(`is this WORKING!?!?! ON PORT ${PORT}`);
});