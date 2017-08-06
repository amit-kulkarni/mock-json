var fs = require('fs');
var utils = require('./utils');

module.exports = function(app, url) {

  app.get(url, function(req, res) {
    var myPath = utils.getPath('GET', url);

    fs.readFile(myPath,'utf8', function(err, data){
        if(err) {
          throw err;
        }
        res.send(JSON.parse(data));
    });

  });

  app.post(url, function(req, res) {
    var myPath = utils.getPath('POST', url);

    fs.readFile(myPath,'utf8', function(err, data){
        if(err) {
          throw err;
        }
        res.send(JSON.parse(data));
    });
  });

}
