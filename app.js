
/**
 * Module dependencies.
 */


var express = require('express');
var app = express();

app.get('/', function(req, res){
  var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
  res.send(services);
});

app.listen(process.env.PORT || 3000);


