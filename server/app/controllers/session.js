/**
 * Created with JetBrains WebStorm.
 * User: yinanyang
 * Date: 31/08/13
 * Time: 8:52 PM
 * To change this template use File | Settings | File Templates.
 */
exports.set  = function(req, res){
    req.session.name = req.session.name || new Date().toUTCString();
    res.send(req.session.name);
    console.log(req.session.name);
};