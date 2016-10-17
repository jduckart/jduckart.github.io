(function(){
    "use strict";

   var app= angular.module("app", ["ngRoute"]);

   app.config(function ($routeProvider) {
        $routeProvider
        .when("/main", {
            templateUrl: "main.html",
            controller: "MainController"
        })
        .when("/about",
            {
                templateUrl: "about.html"
            })
        .when("/resume",
            {
                templateUrl: "resume.html"
            })
          .when("/contact",
            {
                templateUrl: "contact.html"
            })
        .otherwise({redirectTo:"/main"});
    }); 
}()); 

  