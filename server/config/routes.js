module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
    var uni = require('../app/controllers/uni');


	app.get('/', home.index);
    app.get('/uni',uni.showUni);

};
