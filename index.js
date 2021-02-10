const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
app.use(cors());
const port = process.env.PORT || 8000;

// put your routes here
// routes should begin with /api/
// since the front end proxies requests to any url beginning with /api/
// from port 3000 to port 8000 in development
// example route:
// app.post("/api/auth/register", (req, res) => {....})
//
// and in the front end:
// axios.post("/api/auth/register", {formDate}).then(result=>{....}).catch(err=>{....})

// static file declaration
if (process.env.NODE_ENV === 'production') {
  // production mode
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  // development mode
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
  });
}

// be sure to set your MONGO_URI in a .env file in both the root folder of your project
// and in the config variables section on Heroku, in the settings page for your app
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log(`Server is up on port ${port}!`);
    });
  });
