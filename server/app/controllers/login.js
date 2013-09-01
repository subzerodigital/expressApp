exports.login  = function(req, res){
    res.render("login/loginForm",{title:'login'});
};

exports.loginPost = function(req,res){
    //console.log('login hit');
    if(req.body.userName === req.body.passWord){
        // console.log(req.body.userName + '|' + req.body.passWord);
        req.session.user = {isAuthenticated:true,username:req.body.userName};
        res.redirect('/showEmployee');
    }else{
        res.redirect('/login');
    }

};

exports.loginAjax = function(req,res){
    if(req.body.userName === req.body.passWord){
        req.session.user = {isAuthenticated:true,username:req.body.userName};
        res.format({
            json:function(){
                res.json({'success':true,'redirectUrl':'/showEmployee'});
            }
        });
    }else{
        res.format({
            json:function(){
                res.json({'success':false,'redirectUrl':'/login'});
            }
        });
    }
}