/*

 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        var self = this;
        if(window.cordova){
            document.addEventListener('deviceready', self.onDeviceReady, false);
        }else{
            $(document).ready(function(){
                self.onDeviceReady();
            });
        }
    },
    // deviceready Event Handler
    onDeviceReady: function() {

    }
};
