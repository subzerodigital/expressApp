copsNotes.module("Home.List",function(List,copsNotes,Backbone,Marionette,$,_){

    //declare the incident item view & collection view
    List.IncidentItemView = Marionette.ItemView.extend({

       tagName:"li",
       className:"incidentListItem",
       template:"#incidentItem_tmpl",

       events:{
           "click .fn-deleteItem":"deleteItem"
       },

       deleteItem:function(evt){
           //evt.stopPropagation();
           //this.model.collection.remove(this.model);
           //console.log("clicked");
           this.trigger("incident:delete",this.model);
       },

       remove:function(){
           this.$el.fadeOut(200,function(){
               $(this).remove();
           });
       }

    });
    //collection view
    List.IncidentsCollectionView = Marionette.CompositeView.extend({

        className:"incidentList",
        tagName:"div",
        itemView:List.IncidentItemView,
        template:"#incidentItemsContainer_tmpl",
        itemViewContainer:"ul",
        events:{
            "click":"handleClick"
        },
        handleClick:function(evt){
            evt.preventDefault();
            // console.log("list clicked");
        },
        onItemviewIncidentDelete:function(childView,model){
            //console.log("convention over configration");
            this.collection.remove(model);
        }
    });

    /**
     * controllers
     */

    List.controller = {
        showList:function(){
            var icds = copsNotes.request("incidents:entities");
            var incidentColView = new copsNotes.Home.List.IncidentsCollectionView({
                collection:icds
            });
            //show the page
            copsNotes.main.show(incidentColView);


            //listen on event - can be defined in collection view
            /*
            incidentColView.on("itemview:incident:delete",function(childView, model){
                //console.log(model);
                icds.remove(model);
            });
            */
        }
    };

    /*
    List.showListController = function(){
        var icds = copsNotes.request("incidents:entities");
        var incidentColView = new copsNotes.Home.List.IncidentsCollectionView({
            collection:icds
        });
        //show the page
        copsNotes.main.show(incidentColView);
    }
    */
});