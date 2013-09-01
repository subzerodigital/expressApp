var filters = require('../app/filter/filters');

module.exports = function(app){

	//home route obj
	var home = require('../app/controllers/home');
    var uni = require('../app/controllers/uni');
    var cookie = require('../app/controllers/cookie');
    var employee = require('../app/controllers/employee');
    var login = require('../app/controllers/login');
    var session = require('../app/controllers/session');
    var register = require('../app/controllers/register');

    //map routers
	app.get('/', home.index);
    app.get('/uni',uni.showUni);
    app.get('/setCookie',cookie.set);
    //with a filter passed;
    app.get('/showEmployee',filters.accessChecker,employee.showEmployee);

    //
    app.get('/login',login.login);
    app.post('/loginPost',login.loginPost);
    app.post('/loginAjax',login.loginAjax);
    app.get('/session',session.set);

    //registration
    app.get('/register',register.register);
    app.post('/registerAjax',register.registerAjax);
    app.post('/registerPost',register.registerPost);
};
