var app = angular.module("app", ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {$stateProvider
            .state("Blog", {
                url: '/Blog',
                templateUrl: '/html/Blog/Blog.html',
                controller:'blogCtrl',
                resolve:load(['/html/Blog/Blog.js'])
            })
            .state("Home", {
                url: '/Home',
                templateUrl: '/html/Home/Home.html',
                controller:'HomeCtrl',
                resolve:load(['/html/Home/Home.js'])
            });
        }]);
        const load = function(jsFiles){
            return {
                load: function() {
                    jsLoader(jsFiles);
                }
            }
        }
// app.config(function($routeProvider){
//     $routeProvider
//         .when('/Home', {
//             templateUrl: "/html/Home/Home.html",
//             controller: "HomeCtrl"
//         })
//         .when('/LessTest', {
//             templateUrl: "/html/LessTest.html",
//             controller: "LessTestCtrl"
//         })
//         .when('/aboutThis', {
//             templateUrl: "/html/aboutThis.html",
//             controller: "aboutThisCtrl"
//         })
//         .when('/debounce', {
//             templateUrl: "/html/debounce.html",
//             controller: "debounceCtrl"
//         })
//         .when('/Blog', {
//             templateUrl: "/html/Blog/Blog.html",
//             controller: "blogCtrl"
//         })
//         .otherwise({ redirectTo: '/Home' });
//     });