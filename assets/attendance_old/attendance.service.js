(function () {
    'use strict';
	angular.module('employeeApp')
    .service('attendanceService', ['$q', '$http', function($q, $http){
        var getAttendanceDetailForAllEmpoloyee = function () {
            var deferred = $q.defer();
            $http({
                url: '../master/employeeAttendanceDetail.json',
                method: 'GET'
            }).then(function(res){
                deferred.resolve(res.data);
            }, function(res){
                return deferred.reject(res);
            });

            return deferred.promise;
        }
        return {
            getAttendanceDetailForAllEmpoloyee: getAttendanceDetailForAllEmpoloyee
        }
    }])
})();