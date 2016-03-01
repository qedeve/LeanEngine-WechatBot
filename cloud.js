var AV = require('leanengine');


AV.Cloud.define('Hello', function(req, res) {
  res.sendStatus(200);
});


module.exports = AV.Cloud;
