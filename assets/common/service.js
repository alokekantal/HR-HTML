(function () {
    'use strict';
	angular.module('employeeApp')
    .service('commonService', ['$q', '$http', function($q, $http){
        var getAttendanceStatusMaster = function () {
            var deferred = $q.defer();
            $http({
                url: '../../assets/master/attendanceMaster.json',
                method: 'GET'
            }).then(function(res){
                deferred.resolve(res.data);
            }, function(res){
                return deferred.reject(res);
            });

            return deferred.promise;
        }
        return {
            getAttendanceStatusMaster: getAttendanceStatusMaster
        }
    }])
})();