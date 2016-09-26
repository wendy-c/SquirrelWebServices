var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var session = require('express-session');
var passport = require('passport');
//passport configuration
var passportConfig = require('./authConfig').passportConfig;

var app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ 
  secret: 'keyboard squirrel',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

//OAuth configuration
app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport);

//What is this (below) for?
app.post('/login', passport.authenticate('local'), function(req, res) {
  console.log(req, 'app.post /login')
  //if this function gets invoked, authentucation was successful
  // `req.user` contains the authenticated user.
  //res.redirect('/links/' + req.user.id);
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: 'http://localhost:3010/#/home',
    failureRedirect: 'http://localhost:3010/'
  }));

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

app.listen('3010', function() {
  console.log('listening on port 3010!');
});