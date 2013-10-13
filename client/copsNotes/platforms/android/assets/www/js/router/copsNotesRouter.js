copsNotes.module("Router",function(Router,copsNotes,Backbone,Marionette,$,_){

    Router.mainRouter = Marionette.AppRouter.extend({
        //marionette style router
        appRoutes:{
            "":"listIncidents",
            "incidents":"listIncidents"
        },
        //still can use backbone standard router
        routes:{

        }

    });

    var API = {
        listIncidents:function(){
            copsNotes.Home.List.controller.showList();
        }
    };

    copsNotes.addInitializer(function(){
        new Router.mainRouter({
            controller:API
        });
    });
});