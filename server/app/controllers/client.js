



/*controller for client side app*/

exports.app = function(req,res){
    res.render('client/app',{
        title:"Client app",
        layout:"layoutClient"
    })
};