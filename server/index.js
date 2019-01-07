const path = require('path')
const express = require('express')
const volleyball = require('volleyball')
const app = express()

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

//logging middleware
app.use(volleyball)

//body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routing middleware
// app.use('/api', require('./api'))

// failed to catch req above means 404, forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle any errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
