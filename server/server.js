var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var session = require('express-session');
var passport = require('passport');
var cors = require('cors');
var request = require('request');
var cheerio = require('cheerio');
var APIKeys = require('./config');
var routes = require('./routes/routes');
var rp = require('request-promise');

//passport configuration
var passportConfig = require('./authConfig').passportConfig;

var app = express();


app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ 
  secret: 'keyboard squirrel',
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

//OAuth configuration
app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport);
//API ROUTES 
app.get('/auth/facebook', passport.authenticate('facebook'));

app.post('/login2', passport.authenticate('local', { successRedirect: '/#/home',
                                                     failureRedirect: '/' }));

// app.post('/signup', passport.authenticate('local', { successRedirect: '/#/home',
//                                                      failureRedirect: '/signup' }));
//check to see req session?
app.get('/checkAuth', function(req, res){
  res.send(req.user);
});

//////////////////////////////////////////////////////////////////////////
//delete when query to db is established
app.get('/searchFriend', function(req, res) {
  console.log('got to the back for /searchFriend>>>>>>>>>');
  res.send([{
    avatar: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/13592162_10154405816284363_2728511714196473_n.jpg?oh=56c39b420052da84d8088c01941a872d&oe=58746F98",
    createdAt: "2016-10-01T17:58:25.000Z",
    fbid: "10154660869289363",
    fbname: "Jordan Taylor",
    updatedAt: "2016-10-01T17:58:25.000Z"
  }]);
});
//////////////////////////////////////////////////////////////////////////

//crawl article

//////////get info for user articles//////////
app.post('/getUrlInfo', function(req, res) {
  //make call to readibility
  request('https://readability.com/api/content/v1/parser?url=' + req.body.url + '/&token=ea069fd819bb249c3f5a3b38bbd39b3622ab1ea9', function(req, rs) {
    // console.log('readability GIVE ME INFO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', rs);
    res.send(rs);   
  });
});

//////////post new added articles to recommendation server//////////
app.post('/rec/link/:userid', function(req, res) {
  var url = req.body.link;
  var options = {
    method: 'POST',
    uri: 'http://localhost:3121/rec/link/' + req.params.userid,
    body: {
      link: req.body.link
    },
    json: true
  };

  rp(options)
    .then(function(parsedBody) {
      res.send();
    })
    .catch(function(err) {
      res.send(err);
    });

});

//////////Get recommended articles//////////
app.get('/rec/:userid', function(req, res) {
  var options = {
    method: 'GET',
    uri: 'http://localhost:3121/rec/' + req.params.userid,
    json: true
  };

  rp(options)
    .then(function(parsedBody) {
      res.send(parsedBody);
    })
    .catch(function(err) {
      res.send(err);
    });

});

//////////Get info for recommendation views//////////
app.post('/getRecInfo', function(req, res) {
  //make call to readibility
  request('https://readability.com/api/content/v1/parser?url=' + req.body.url + '/&token=ea069fd819bb249c3f5a3b38bbd39b3622ab1ea9', function(req, rs) {
    res.send(rs);   
  });
});

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: 'http://localhost:3010/#/',
    failureRedirect: 'http://localhost:3010/'
  }));

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/signup',
    failureRedirect: '/signup'
  }));

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

routes(app);


app.listen('3010', function() {
  console.log('listening on port 3010!');
});

