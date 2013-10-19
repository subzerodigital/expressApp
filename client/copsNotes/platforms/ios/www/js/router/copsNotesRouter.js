copsNotes.module("Router",function(Router,copsNotes,Backbone,Marionette,$,_){

    Router.mainRouter = Marionette.AppRouter.extend({
        //marionette style router
        appRoutes:{
            "":"listIncidents",
            "incidents":"listIncidents",
            "incidents/:id":"showIncidentDetail",
            "editIncident/:id":"editIncident"
        },
        //still can use backbone standard router
        routes:{

        }

    });

    var API = {
        listIncidents:function(){
            //show the list
            copsNotes.Home.List.controller.showList();
            //show the home page menu
            copsNotes.Home.Menu.controller.showHomeMenu();
        },
        showIncidentDetail:function(id){
            copsNotes.Home.List.controller.showIncidentDetails(id);
        },
        editIncident:function(id){
            copsNotes.Incident.Edit.controller.showEditPage(id);
        }
    };

    copsNotes.addInitializer(function(){
        new Router.mainRouter({
            controller:API
        });
    });
});