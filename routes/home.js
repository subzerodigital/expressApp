var index = function (req,res){
	res.send('welcome to new router home page');
};

var init = function(req,res){
    res.send('here goes init data');
};


exports.index = index;
exports.init = init;







