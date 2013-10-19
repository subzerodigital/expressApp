copsNotes.module("Home.Menu",function(Menu,copsNotes,Backbone,Marionette,$,_){

    /*view delcaration*/

    Menu.HomeMenuView = Marionette.ItemView.extend({
        template:"#homeMenu_tmpl",
        tagName:"div",
        className:"homeMenu"
    });

    /*controller*/
    Menu.controller = {
        showHomeMenu:function(){
            var homeMenuView = new copsNotes.Home.Menu.HomeMenuView();
            copsNotes.menu.show(homeMenuView);
        }
    };
});