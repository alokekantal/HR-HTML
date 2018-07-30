(function () {
    'use strict';
    angular.module('employeeApp', ['nvd3', 'moment-picker'])
    .controller('EmployeeController', EmployeeController);
    function EmployeeController() {
        var vm = this; 
        vm.title = 'Employees';

        vm.addEmployee = function(){
            window.location = "../addEmployee/addEmployee.html";
        }
    }
})();