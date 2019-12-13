var app = angular.module("app", ['ngDialog','ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/Home', {
            templateUrl: "/html/Home/Home.html",
            controller: "HomeCtrl"
        })
        .when('/LessTest', {
            templateUrl: "/html/LessTest.html",
            controller: "LessTestCtrl"
        })
        .otherwise({ redirectTo: '/tabs' });
    });