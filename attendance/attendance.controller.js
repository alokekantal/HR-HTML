(function () {
    'use strict';
	angular.module('employeeApp', ['nvd3', 'moment-picker'])
    .controller('attendanceController', ['$q', 'attendanceService', 'commonService', function($q, attendanceService, commonService){
        var vm = this; 
        vm.title = 'Attendance';   
        vm.attendancefile = null;
        
        vm.uploadAttendanceExcel = function(){
            $('.splash').css('display', 'block');
            attendanceService.uploadAttendanceExcel(vm.currentYearMonth, vm.attendancefile).then(function(res){
                console.log(res);
                $('.splash').css('display', 'none');
            }, function(err){
                console.log(err);
                $('.splash').css('display', 'none');
            });
        }
    }])
})();