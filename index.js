var express = require('express');
var app = express();
var config = require('./config');
var urls = config.urls;

require('./middleware')(app);

urls.forEach(function(url) {
  require('./route-loader')(app, url);
})

app.use(function(err, req, res, next){
  console.log('Error in the request', err.message);
  res.status(err.status || 500);
  res.send('Error in the request', err.message);
});

app.listen(config.port, function(){
  console.log('Listening on port ', config.port);
});
