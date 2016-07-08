(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var editProfile = angular.module('editProfile', []);


// Controllers
editProfile.controller('profileController', function($scope, $http) {
    $scope.formData = {};

    $scope.updateProfile = function() {
        $('#submitBtn').hide();
        $('#loader').show();

        // console.log($scope.formData);

        $http.post('/profile', {
            'data': $scope.formData
        })
        .success(function(data) {
            $('#loader').hide();

            if (data.error) {
                console.log('saving error');
                $('#error_msg > .message').empty().append(data.error);
                $('#error_msg').show();
            }

            if (data.success) {
                $('#success_msg > .message').empty().append(data.success);
                $('#success_msg').show();

                setTimeout(function() {
                    window.location.replace("/");
                }, 2200);
            }
        })
        .error(function(data) {
            console.log('fatal error');
            $('.error_msg#log > .message').empty().append('<strong>Error: </strong> An error occured while trying to save your article. Please try again.');
            $('.error_msg#log').show();
        });
    };
});

},{}]},{},[1]);
