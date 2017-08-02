/**
 * Created by talha on 8/14/15.
 */
'use strict';
angular.module('fleetPortal').factory('ForkliftService', ['$http', function($http) {

    return {
        addForklift: function (credentials, success, error) {
            $http.post('/forklifts/', flObj, {}).
                then(function (data) {
                    success(data)
                }, function (e) {
                    error(e);
                });
        },
        editForklift: function (flObj, success, error) {
            $http.put('/forklifts/', flObj, {}).
                then(function (data) {
                    success(data)
                }, function (e) {
                    error(e);
                });
        },
        deleteForklift: function (forkliftID, success, error) {
            $http.delete('/forklifts/'+forkliftID, {}).
                then(function (data) {
                    success(data)
                }, function (e) {
                    error(e);
                });
        },

        getForklifts: function (searchText, success, error) {
            $http.get('/forklifts/?search='+searchText).
                then(function (data) {
                    success(data)
                }, function (e) {
                    error(e);
                });
        }


    }

}]);