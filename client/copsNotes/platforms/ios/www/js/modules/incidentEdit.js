copsNotes.module("Incident.Edit",function(Edit,copsNotes,Backbone,Marionette,$,_){

    Edit.IncidentEditView = Marionette.ItemView.extend({
        tagName: "form",
        className: "incidentEditCon",
        template: "#incidentEdit_tmpl"
    });

    /***************************/
    /******* controllers *******/
    /***************************/

    Edit.controller = {
        showEditPage: function(id){
            var model = copsNotes.request("incident:entity",id);
            //console.log(model);
            if(model!==undefined){
                var incidentEditView = new copsNotes.Incident.Edit.IncidentEditView({
                    model:model
                });
            }else{
                console.log("model id doesn't exist");
            }
            //show through the regin manager
            copsNotes.main.show(incidentEditView);
        }
    }

});