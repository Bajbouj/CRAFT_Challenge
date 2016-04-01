'use strict';
angular.module('monApp.services',[]).factory('UserService', function ($resource) {

    return $resource('http://localhost:8080/HelloAngular/userr.json/:id',{id:'@id'}, {
        update:{
            method:'PUT'
            }
        });
        return data;
});
