/**
 * Created with JetBrains WebStorm.
 * User: yinanyang
 * Date: 31/08/13
 * Time: 8:52 PM
 * To change this template use File | Settings | File Templates.
 */


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

};