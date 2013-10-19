/*

 */

//in case, doesn't exist
var copsNotes = copsNotes || {};
var sz = sz || {};

sz.app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        var self = this;
        if(window.cordova){
            //console.log("launched from device");
            document.addEventListener('deviceready', self.onDeviceReady, false);
        }else{
            $(document).ready(function(){
                //console.log("launched from browser");
                self.onDeviceReady();
            });
        }
    },
    // deviceready Event Handler // app starts here
    onDeviceReady: function() {

        copsNotes.addRegions({
            main: "#sz_page",
            menu: "#sz_menuBar"
        });

        copsNotes.on("initialize:after",function(){
            if(Backbone.history){
                //copsNotes.Home.List.controller.showList();
                //start backbone router
                Backbone.history.start();
            }
        });

        copsNotes.start();
    }
};
