(function () {
    'use strict';
 
    angular.module('employeeApp', ['nvd3', 'moment-picker'])
    .controller('DashboardController', DashboardController);
 
    function DashboardController() {
        var vm = this;
 
        vm.title = 'Dashboard';
        
    }
})();