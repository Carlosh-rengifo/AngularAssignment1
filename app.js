(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController ($scope) {
  $scope.listIngredients = "";
  $scope.resultValidate = "";

  $scope.validateString = function () {
    $scope.resultValidate = returnMessage($scope.listIngredients); 
  };
};

function returnMessage(pvStrIngredients){
	var vIntNumElements = 0;
	var vStrMessage = "";

	vIntNumElements = countElementsValid(pvStrIngredients);
	vStrMessage = returnMessageCorrect(vIntNumElements);

	return vStrMessage;
};

function countElementsValid(pvArray){
	var vIntNumElements = 0;
	var vRes = pvArray.split(",");

	for(var i = 0; i < vRes.length; i++){
	    if(vRes[i] != "")
	        vIntNumElements++;
	}
	return vIntNumElements; 
};

function returnMessageCorrect(pvIntNumElements){
	var vStrMessage = "";

	if (pvIntNumElements == 0) {
		vStrMessage = "Please enter data first!";		
	};
	if (pvIntNumElements >=1 && pvIntNumElements <=3) {
		vStrMessage = "Enjoy!";		
	};
	if (pvIntNumElements >3) {
		vStrMessage = "Too much!";		
	};
	return vStrMessage;
};

})();
