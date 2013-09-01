//import
var config = require('../../config/config'),
    mysql = require('mysql');


//sql connection

exports.showEmployee = function(req, res){

    var mysqlConnection = mysql.createConnection(config.mysql);
    mysqlConnection.connect();
    mysqlConnection.query('SELECT * from jobdone.employee', function(err, rows, fields) {
        if (err) throw err;
        //console.log(rows);
        res.format({
           json:function(){
               if(req.cookies.respCookie){
                   res.json(rows[0]);
                   res.cookie('respCookie','1234');
               }else{
                   res.json(rows[0]);
               }
           },
           html:function(){
               res.cookie('respCookie','1234');
               res.json(rows[0]);
           }
        });

    });
    mysqlConnection.end();
};


