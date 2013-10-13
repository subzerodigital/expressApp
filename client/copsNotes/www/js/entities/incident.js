/**
 * module entity to contain: incident model and collections
 */
copsNotes.module("Entities",function(Entities,copsNotes,Backbone,Marionette,$,_){

    //define incident
    Entities.Incident = Backbone.DeepModel.extend({
       default:{
           "id":null,
           "time":null,
           "location":null,
           "type":null,
           "sev":4,
           "comments":"",
           "poi":[],
           "vehicle":[],
           "object":[],
           "audios":[],
           "videos":[],
           "photos":[]
       },
       urlRoot:"incidents"
    });
    //config incidents to use localstorage adaptor
    Entities.configStorage(Entities.Incident);

    //define incident collection
    Entities.IncidentCollection = Backbone.Collection.extend({
        model:Entities.Incident,
        comparator:"time",
        url:"incidents"
    });

    //config collection to use localstorage
    Entities.configStorage(Entities.IncidentCollection);

    //provide a API for outside to invoke
    var API = {
        //get the collection
        getIncidents:function(){
            var incidentsCol = new Entities.IncidentCollection();
            incidentsCol.fetch();

            //if it's empty invoke mocking data
            if(incidentsCol.length===0){
                console.log("mocked");
                return Entities.mockData();
            }

            return incidentsCol;
        },
        getIncident:function(id){
            var incident = new Entities.Incident({id:id});
            incident.fetch();
            return incident;
        }
    };

    // public function to mock data - excutable from console
    Entities.mockData = function(){
        //mock from config/mock.js
        incidents = new Entities.IncidentCollection(mockIncidents);
        incidents.forEach(function(incident){
           incident.save();
        });

        return incidents;
    };


    //setting up request - response system
    copsNotes.reqres.setHandler("incidents:entities",function(){
        return API.getIncidents();
    });

    copsNotes.reqres.setHandler("incident:entity",function(id){
        return API.getIncident(id);
    })

});