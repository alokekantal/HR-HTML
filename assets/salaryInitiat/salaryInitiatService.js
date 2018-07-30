(function () {
    'use strict';
	angular.module('employeeApp')
    .service('salaryService', ['$q', '$http', function($q, $http){
        var getEmpoloyeeSalaryDetail = function () {
            var deferred = $q.defer();
            $http({
                url: '../../assets/master/EmployeeSalary.json',
                method: 'GET'
            }).then(function(res){
                deferred.resolve(res.data);
            }, function(res){
                return deferred.reject(res);
            });

            return deferred.promise;
        }
        return {
            getEmpoloyeeSalaryDetail: getEmpoloyeeSalaryDetail
        }
    }])
})();