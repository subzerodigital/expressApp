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
       }
    });

    //define incident collection
    Entities.IncidentCollection = Backbone.Collection.extend({
        model:Entities.Incident,
        comparator:"time"
    });


    //provide a API for outside to invoke
    var API = {
        getIncidents:function(){
            if(incidents===undefined){
                initIncidents();
            }
            return incidents;
        }
    };


    var incidents;
    //mocking data for now:
    var initIncidents = function(){
        incidents = new Entities.IncidentCollection([
            {
                time:"2013-10-07T03:32:01.189Z",
                id:1,
                location:"Hornsby",
                type:"car accident",
                comments:"this is a small car accidents"
            },
            {
                time:"2013-10-08T03:32:01.189Z",
                id:2,
                location:"Guildford",
                type:"car accident",
                comments:"this is a nasty car accidents"
            }
        ]);
    };


    //setting up request - response system
    copsNotes.reqres.setHandler("incidents:entities",function(){
        return API.getIncidents();
    });

});