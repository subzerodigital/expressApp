copsNotes.module("Incident.Detail",function(Detail,copsNotes,Backbone,Marionette,$,_){

	Detail.IncidentDetailView = Marionette.ItemView.extend({

		tagName: "article",
		className: "incidentDetailCon",
		template: "#incidentDetailsContainer_tmpl"
	});
});