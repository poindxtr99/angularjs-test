(function(){
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        'use strict';
        var defaultEmptyInputMessage = "Please enter data first";
        $scope.lunchRequest = "";
        $scope.lunchCheckResultMessage = "";
        $scope.checkTheLunchRequest = function(){
            var numItems = parseLunchRequest($scope.lunchRequest);
            $scope.lunchCheckResultMessage = isNullOrEmpty($scope.lunchRequest) ? defaultEmptyInputMessage : verifyLunchCheck(numItems);
        }
    }

    function parseLunchRequest(string) {
        var stringSeparator = ',';
        var resultArray = string.split(stringSeparator);
        return resultArray.length;
    }

    function verifyLunchCheck(numItems) {
        return numItems > 3 ?  "Too Much" : "Enjoy";
    }

    function isNullOrEmpty (strValue)
    {
        return !strValue;
    }

})();