var APIKeys = require('./config');
var request = require('request');
var rp = require('request-promise');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
//options for request-promise http request
var options = function(id, name, avatar){
  return {
    method: 'POST',
    uri: 'http://localhost:8888/login/' + id,
    body: {
        userID: id,
        name: name || undefined,
        avatar: avatar || undefined,
    },
    json: true // Automatically stringifies the body to JSON
  }
}
//profile fields to request from facebook
var FBprofileFields = [
    'id',
    'displayName',
    'first_name',
    'last_name',
    'email',
    'bio',
    'work',
    'education',
    'location',
    'birthday',
    'cover',
    'picture.type(large)',
    'gender',
    'interested_in',
    'link', // FB timeline 
    'website',
    'is_verified'
  ];

//passport configuration
module.exports.passportConfig = function(passport){
  passport.use(new FacebookStrategy({
    clientID: APIKeys.keys.facebook.key,
    clientSecret: APIKeys.keys.facebook.secret,
    callbackURL: 'http://localhost:3010/auth/facebook/callback',
    profileFields: FBprofileFields,
  },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile.photos[0].value, 'what is this thing?');
      var apiFields = options(profile.id, profile.displayName, profile.photos[0].value)

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
};