(function () {
    'use strict';
 
    angular.module('employeeApp', ['nvd3', 'moment-picker'])
    .controller('addEditEmployeeController', EmployeeController);
    function EmployeeController() {
        var vm = this; 
        vm.title = 'Employee';
        
 
    }
})();