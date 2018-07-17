(function () {
    'use strict';
 
    angular.module('employeeApp', [])
    .controller('loginController', loginController);
 
    function loginController() {
        var vm = this; 
        vm.showForgetPassword = false;

        vm.login = function(){
            window.location = "../dashboard/dashboard.html";
        }
        
    }
})();