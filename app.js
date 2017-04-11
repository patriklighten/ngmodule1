(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu=""; 
  $scope.message="";

  $scope.sayMessage = function () {
    var menus= $scope.menu; 
    var l= menus.split(',');
    var count=0; 
    for( var i=0; i<l.length; i++)
    {
      if(l[i].trim().length>0) count++;
    }
    if(count==0) $scope.message="Please enter data first";
    else if(count<=3) $scope.message="Enjoy!"; 
    else $scope.message="Too much!";
  };


}


})();
