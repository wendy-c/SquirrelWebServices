var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var APIKeys = require('./config');
var profileFields = require('./authConfig').profileFields;
var options = require('./authConfig').options;
//below are peer dependencies. They will allow you to make server side http requests
var request = require('request');
var rp = require('request-promise');

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


passport.use(new FacebookStrategy({
  clientID: APIKeys.keys.facebook.key,
  clientSecret: APIKeys.keys.facebook.secret,
  callbackURL: 'http://localhost:3010/auth/facebook/callback',
  profileFields: profileFields,
},
  function(accessToken, refreshToken, profile, done) {
    var apiFields = options(profile.id, profile.displayName)

    rp(apiFields)
    .then(function (user) {
        console.log(user, 'IS THIS THE DATA');
        done(null, user);
    })
    .catch(function (err) {
      console.log(err,'could not reach SquirrelDBService');
    });
  }
));

passport.use(new TwitterStrategy({
  consumerKey: APIKeys.keys.twitter.key,
  consumerSecret: APIKeys.keys.twitter.secret,
  callbackURL: 'http://localhost:3010/auth/twitter/callback'
},
function(token, tokenSecret, profile, done) {
  console.log(profile, 'twitter profile?');
  User.findOrCreate({}, function(err, user) {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
}));

//user ID is serialized to the session, when a request of the same ID is received it will restore the session
passport.serializeUser(function(user, done) {
  done(null, user.fbid);
});
//used to check if user session is actuallly a verified user in database! 
passport.deserializeUser(function(id, done) {
  var apiFields = options(id);

  rp(apiFields)
    .then(function(user){
      console.log('passport.deserilizeUser', user);
      done(err, user);
    })
    .catch(function(err){
      console.log('passport.deserilizeUser 2', err);
    })

});

//app.get('/');

app.post('/login', passport.authenticate('local'), function(req, res) {
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