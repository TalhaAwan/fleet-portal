/**
 * Created by talha on 8/14/15.
 */

'use strict';

angular.module('fleetPortal').controller('FleetController', function($scope, ForkliftService, $mdDialog, $filter, $timeout, $mdToast) {

    ForkliftService.getForklifts("", function(result){
        $scope.forklifts = result.data;
    },
    function(err){
        console.log(err)
    });



    var showToast = function(message){
        $mdToast.show(
          $mdToast.simple()
          .content(message)
          .position(getToastPosition())
          .hideDelay(3000)
          );
    }

    $scope.openAddForkliftDialog = function(ev) {
        $mdDialog.show({
            controller: AddForkLiftcontroller,
            templateUrl: '/views/dialogs/add-forklift.html',
            targetEvent: ev
        })
            .then(function(result) {
                $scope.forklifts.push(result);
                showToast('Forklift '+ result.id +' Added!');
            }, function() {
                console.log("Dialog Cancelled");
            });
    };


    $scope.openEditForkliftDialog = function(ev, forklift, index){
        $mdDialog.show({
            controller: EditForkLiftcontroller,
            templateUrl: '/views/dialogs/edit-forklift.html',
            locals:{
              "forklift": angular.copy(forklift)
            },
            targetEvent: ev
        })
            .then(function(result) {
                    if(result && typeof result === 'object'){
                        $scope.forklifts[index] = result;
                        showToast('Forklift '+ result.id +' Updated!');
                    }
                    else{
                        $scope.forklifts.splice(index, 1);
                        showToast('Forklift Deleted!');
                    }
                            
            }, function(){
                console.log("Dialog Cancelled");

            });

    };


});


function AddForkLiftcontroller ($scope, $mdDialog){

    $scope.addForklift = function(){
        $scope.forklift.id = Date.now();
        $mdDialog.hide($scope.forklift);
        
    }
    $scope.closeDialog = function () {
        $mdDialog.cancel();
    }
}


function EditForkLiftcontroller ($scope, $mdDialog, forklift){
    $scope.forklift = forklift;
    $scope.deleteForklift = function(ev, forklift){
        $mdDialog.hide();
    };

    $scope.editForklift = function(){
        $mdDialog.hide($scope.forklift);
    }

    $scope.closeDialog = function () {
        $mdDialog.cancel();
    }
}


var toastPosition = {
    bottom: true,
    top: false,
    left: false,
    right: true
};

var getToastPosition = function() {
    return Object.keys(toastPosition)
    .filter(function(pos) { return toastPosition[pos]; })
    .join(' ');
};



