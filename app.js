(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu=""; 
  $scope.message="";
  $scope.messageStyle={color:'red'};
  $scope.boxStyle={border: '1px solid red'};
  $scope.sayMessage = function () {
    var menus= $scope.menu; 
    var l= menus.split(',');
    var count=0; 
    for( var i=0; i<l.length; i++)
    {
      if(l[i].trim().length>0) count++;
    }
    if(count==0)
    { 
      $scope.message="Please enter data first";
      $scope.messageStyle={color:'red'};
      $scope.boxStyle={border: '1px solid red'};

    }
    else if(count<=3) 
      {
        $scope.message="Enjoy!"; 
        $scope.messageStyle={color:'green'};
        $scope.boxStyle={border: '1px solid green'};
      }
    else 
      {
        $scope.message="Too much!";
        $scope.messageStyle={color:'green'};
        $scope.boxStyle={border: '1px solid green'};
      }
  };


}


})();
