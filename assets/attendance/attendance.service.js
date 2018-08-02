(function () {
    'use strict';
	angular.module('employeeApp')
    .service('attendanceService', ['$q', '$http', function($q, $http){
        var getAttendanceDetailForAllEmpoloyee = function () {
            var deferred = $q.defer();
            $http({
                url: '../../assets/master/employeeAttendanceDetail.json',
                method: 'GET'
            }).then(function(res){
                deferred.resolve(res.data);
            }, function(res){
                return deferred.reject(res);
            });

            return deferred.promise;
        }

        var uploadAttendanceExcel = function(uploadParameter){
            var deferred = $q.defer();
            var upl = $http({
                method: 'POST',
                url: '', // /api/upload
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: uploadParameter,
                transformRequest: function(data, headersGetter) {
                    var formData = new FormData();
                    angular.forEach(data, function(value, key) {
                        formData.append(key, value);
                    });
                    var headers = headersGetter();
                    delete headers['Content-Type'];
                    return formData;
                }
            });
            return upl.then(function(res){
                 deferred.resolve(res.data);
            }, function(err){
                return deferred.reject(res);
            });
            return deferred.promise;
        }
        return {
            getAttendanceDetailForAllEmpoloyee: getAttendanceDetailForAllEmpoloyee,
            uploadAttendanceExcel: uploadAttendanceExcel
        }
    }])
})();