var app = angular.module("app", ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {$stateProvider
            .state('main',{
                name:'main',
                abstract:true,
                url:'/main',
                templateUrl: '/html/main/main.html'
            })
            .state("main.Blog", {
                url: '/Blog',
                templateUrl: '/html/Blog/BlogList.html',
                controller:'blogCtrl',
            })
            .state("main.BlogDetail", {
                url: '/BlogDetail',
                params:{"path":null},
                templateUrl: '/html/Blog/BlogDetail.html',
                controller:'blogDetailCtrl',
            })
            .state("Home", {
                url: '/Home',
                templateUrl: '/html/Home/Home.html',
                controller:'HomeCtrl',
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