/**
 * Created with JetBrains WebStorm.
 * User: yinanyang
 * Date: 25/08/13
 * Time: 3:14 PM
 * To change this template use File | Settings | File Templates.
 */
exports.globalFilter = function(req,res,next){
    //console.log('global filter');
    next();
};


exports.fourOfourFilter = function(req,res,next){
    console.log('page not found');
    next();
};


exports.employeeFilter = function(req,res,next){
    console.log('employee filter called');
    next();
};

exports.accessChecker = function(req,res,next){
    if(req.session.user && req.session.user.isAuthenticated){
        next();
    }else{
        res.redirect('/login');
    }

}