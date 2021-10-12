// Load express module
const express = require('express');
// Initialize app
const app = express();

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://tiru:tirubanu@test.rdgo4.mongodb.net/Pricing?retryWrites=true&w=majority'
);

const db = mongoose.connection;

// Check for DB connection
db.once('open', function () {
  console.log('Connected to MongoDB successfully...............!');
});
db.on('err', function () {
  console.log(err);
});

app.use(express.json());

const cors = require('cors');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const incharg = require('./routes/router');
app.use('/api', incharg);

// Route for home
app.get('/', function (req, res) {
  res.send('Hello from Server........go............');
});

app.listen(9000, function () {
  console.log('server started  9000...');
});
