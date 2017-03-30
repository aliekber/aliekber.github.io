// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the blokken page
        .when('/blokken', {
            templateUrl: 'pages/blokken.html',
            controller: 'blokkenController'
        })

        // route for the studenten page
        .when('/studenten', {
            templateUrl: 'pages/studenten.html',
            controller: 'studentenController'
        })

        // route for the studenten page
        .when('/docenten', {
            templateUrl: 'pages/docenten.html',
            controller: 'docentenController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
        .when('/error', {
            templateUrl: 'pages/error.html',
            controller: 'errorController'
        })
        .otherwise({ redirectTo: '/error' });;
});