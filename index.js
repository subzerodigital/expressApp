/*get express*/
var express = require('express');
/*include router*/
var home = require('./routes/home.js');
var uni = require('./routes/uni.js');



/*instantiate app*/
var app = express();

/*define router functions*/
app.get('/',home.index);
app.get('/init',home.init);


app.get('/uni/:id',uni.uni);

app.listen(3000);
