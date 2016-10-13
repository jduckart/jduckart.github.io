(function(){
    'use strict';
    var module = angular.module("app");
    module.component("movieList", {
        templateUrl: "/movie-list.component.html", 
        controllerAs: "model",
        controller: function(){
            this.message="Hello from a component controller!!!";
        }
    });
}());