(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var dashboard = angular.module('dashboard', []);

// Directives


// Controllers
dashboard.controller('morphSearchController', function ($scope, $http) {
    $scope.input = "";

    $scope.submitSearch = function() {
        // console.log($scope.input);

        $http.post('/search', {
            'searchTerm': $scope.input
        })
        .success(function(data) {
            if (data.error) {
                $('.error_msg#log > .message').empty().append(data.error);
                $('.error_msg#log').show();
            }

            if (data.data) {
                console.log(data.data);
                $('#columnCategories').hide();
                $('#searchResults').empty().show();
            }

            if (data.nodata) {
                console.log(data.nodata);
            }
        })
        .error(function(data) {
            // console.log(data);
            $('.error_msg#log > .message').empty().append("<strong>Error: </strong>Please refresh the page and try again.");
            $('.error_msg#log').show();
        });
    };
});


dashboard.controller('subscriptionsController', function ($scope, $http) {
    $scope.input = "";

    $scope.submitSearch = function() {
        // console.log($scope.input);

        $http.post('/search', {
            'searchTerm': $scope.input
        })
        .success(function(data) {
            if (data.error) {
                $('.error_msg#log > .message').empty().append(data.error);
                $('.error_msg#log').show();
            }

            if (data.data) {
                console.log(data.data);
                $('#columnCategories').hide();
                $('#searchResults').empty().show();
            }

            if (data.nodata) {
                console.log(data.nodata);
            }
        })
        .error(function(data) {
            // console.log(data);
            $('.error_msg#log > .message').empty().append("<strong>Error: </strong>Please refresh the page and try again.");
            $('.error_msg#log').show();
        });
    };
});

},{}]},{},[1]);
