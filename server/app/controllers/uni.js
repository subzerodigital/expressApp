var mongoose = require('mongoose'),
    ejs = require('ejs'),
    Article = mongoose.model('Article');

exports.showUni  = function(req, res){
    res.render("uni/uni.html",{title:'good stuff'});
};