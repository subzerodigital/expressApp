var uni = function (req,res){
    res.send('here to show uni id: '+req.params['id']);
};

exports.uni = uni;

