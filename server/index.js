// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
mongoose.set('bufferCommands', false);
// const cors = require('cors');  // we don't need it anymore, because we use proxy server instead

// DB Setup (connect mongoose and instance of mongodb)
const dbURI = 'mongodb+srv://Venkatesh-admin:venk1234@cluster0.fdh42.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const dbOptions = {

  useUnifiedTopology: true,
  useNewUrlParser: true
};
(async () => {
  try {
    await mongoose.connect(dbURI, dbOptions)
  } catch (err) {
    console.log('error: ' + err)
  }
})()

// App Setup (morgan and body-parser are middleware in Express)
app.use(morgan('combined'));  // middleware for logging
app.use(bodyParser.json({ type: '*/*' }));  // middleware for helping parse incoming HTTP requests
// app.use(cors());  // middleware for circumventing (规避) cors error

// Router Setup
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
