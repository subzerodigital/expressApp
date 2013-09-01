/**
 * Created with JetBrains WebStorm.
 * User: yinanyang
 * Date: 31/08/13
 * Time: 8:52 PM
 * To change this template use File | Settings | File Templates.
 */

var config = require('../../config/config'),
    mysql = require('mysql');


exports.register = function(req,res){
    res.render('register/register',{
        title:"registration",
        layout:"layout2"
    })
};

exports.registerPost = function(req, res){

    /*
    if(req.body.userName === req.body.passWord){
        // console.log(req.body.userName + '|' + req.body.passWord);
        req.session.user = {isAuthenticated:true,username:req.body.userName};
        res.redirect('/showEmployee');
    }else{
        res.redirect('/login');
    }
    */

};

exports.registerAjax = function(req,res){

    var firstName = req.body.firstName || "",
        lastName = req.body.lastName || "",
        email = req.body.emailAddress || "",
        password = req.body.password || "";

    var query = "INSERT INTO jobdone.user (firstName,lastName,email,password) VALUES ('"
                + firstName + "','"
                + lastName + "','"
                + email + "','"
                + password + "');";

    var mysqlConnection = mysql.createConnection(config.mysql);
    mysqlConnection.connect();
    mysqlConnection.query(query, function(err, rows, fields) {
        if (err) throw err;
        res.format({
            json:function(){
                res.json({"success":true,"message":"people Added"});
            },
            html:function(){
            }
        });

    });
    mysqlConnection.end();
    /* INSERT INTO `jobdone`.`user`  (`firstName`, `lastName`, `email`, 'password')
        VALUES ('Yinan ', 'Yang', 'stanley_yangyinan@hotmail.com','123');
     */

};