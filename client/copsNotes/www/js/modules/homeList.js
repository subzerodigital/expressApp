copsNotes.module("Home.List",function(List,copsNotes,Backbone,Marionette,$,_){

    //declare the incident item view & collection view


    List.IncidentItemView = Marionette.ItemView.extend({

       tagName:"li",
       className:"incidentListItem",
       template:"#incidentItem_tmpl"
    });

    List.IncidentsCollectionView = Marionette.CompositeView.extend({

        className:"incidentList",
        itemView:List.IncidentItemView,
        template:"#incidentItemsContainer_tmpl",
        itemViewContainer:"ul",
        events:{
            "click":"handleClick"
        },

        handleClick:function(evt){
            evt.preventDefault();
            console.log("list clicked");
        }

    });

    //controller to display the list
    List.showListController = function(){
        var icds = copsNotes.request("incidents:entities");
        //console.log(icds);
        var incidentColView = new copsNotes.Home.List.IncidentsCollectionView({
            collection:icds
        });
        //show the page
        copsNotes.main.show(incidentColView);
    }
});