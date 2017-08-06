var path = require('path');
var fs = require('fs');

module.exports = {
    getPath: function(requestType, url) {
      return path.join(__dirname, 'json', url, requestType+'Index.js');
    }
}
