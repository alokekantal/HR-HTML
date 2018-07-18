(function () {
    'use strict';
	angular.module('employeeApp', ['nvd3', 'moment-picker'])
    .controller('salaryInitiatController', salaryInitiatController)
    function salaryInitiatController() {
        var vm = this; 
        vm.title = 'Salary Initiation';
 
    }
})();