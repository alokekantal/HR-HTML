(function () {
    'use strict';
	angular.module('employeeApp', ['nvd3', 'moment-picker'])
    .controller('salaryInitiatController', ['$q', 'salaryService', function($q, salaryService) {
        var vm = this; 
        vm.title = 'Salary Initiation';
        vm.currentYearMonth = moment();

        vm.init = function(){ 
            var promiseArray = [];
            promiseArray.push(salaryService.getEmpoloyeeSalaryDetail());
            $q.all(promiseArray).then(function(res){
                vm.employeesSalary = res[0];
            }, function(err){
                console.log(err);
            });           
        }
 
    }]);
})();