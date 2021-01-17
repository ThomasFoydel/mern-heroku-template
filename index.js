const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');

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
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  // production mode
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/build/index.html'));
  });
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
