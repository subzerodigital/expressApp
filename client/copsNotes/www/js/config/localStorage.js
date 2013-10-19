copsNotes.module('Entities',function(Entities,copsNotes,Backbone,Marionette,$,_){

    // a private function to find the storage key: urlRoot or url
    function findStorageKey(entity){
        //model
        if(!!entity.urlRoot){
            return _.result(entity,'urlRoot');
        }
        //collection
        if(!!entity.url){
            return _.result(entity,'url');
        }
        //model with out urlRoot defined but fall back to it's collection
        if(!!entity.collection && !!entity.collection.url){
            return _.result(entity.collection,'url');
        }
        //throw error if non of the above
        throw new Error("Unable to determine storage key");
    }

    //constructor function
    function StorageMixin(entityPrototype){
        var storageKey = findStorageKey(entityPrototype);
        return {localStorage:new Backbone.LocalStorage(storageKey)};
    }

    //extend the entity passed in to have a localStorage attributes
    Entities.configStorage = function(entity){
        _.extend(entity.prototype, new StorageMixin(entity.prototype));
    };

});