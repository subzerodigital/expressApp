var express = require('express'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  config = require('./config/config'),
  filters = require('./app/filter/filters');


//mongo db connections:

//mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

db.once('open',function(){
    console.log("wori data base is open wokao");
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});



var app = express();

//use cookie parser
app.use(express.cookieParser('Temp cookie passphrase'));
//use global filter
app.use(filters.globalFilter);
//use basic authentication
//app.use(express.basicAuth('user','pass'));
app.use(express.bodyParser());
app.use(express.session({secret:"This is my secret"}));




require('./config/express')(app, config);
require('./config/routes')(app);

app.listen(config.port);
