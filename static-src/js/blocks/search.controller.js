'use strict';

var SearchController = function($log, $http) {
    var search = this;
    search.input = "";
    search.submit = submit();

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    */
    function activate() {
        $log.log('SearchController activated!');
        comments.init();
    }

    function submit() {
        $http.post('/search/', {
            'term': $scope.input
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
};

module.exports = SearchController;