exports.set = function(req, res){
    if(req.cookies.beenHereBefore==='yes'){
        res.send('nice nice been here before');
    }else{
        res.cookie('beenHereBefore','yes');
        res.send('this is your fristTime huh?');
    }
};