(function () {
    'use strict';
	angular.module('employeeApp', ['nvd3', 'moment-picker'])
    .controller('attendanceController', ['$q', 'weekdayAndMonth', 'attendanceService', 'commonService', function($q, weekdayAndMonth, attendanceService, commonService){
        var vm = this; 
        vm.title = 'Attendance';   
        vm.currentYearMonth = moment();        
        vm.weekday = weekdayAndMonth.weekday;
        vm.dates = [];
        vm.employees = [];

        vm.prepareMonthData = function(){
             var y = moment.isMoment(vm.currentYearMonth) ? vm.currentYearMonth.toDate().getFullYear() : moment(vm.currentYearMonth).toDate().getFullYear(),
                    m = moment.isMoment(vm.currentYearMonth) ? vm.currentYearMonth.toDate().getMonth() : moment(vm.currentYearMonth).toDate().getMonth(),
                    firstDay = new Date(y, m, 1),
                    lastDay = new Date(y, m + 1, 0),
                    year = firstDay.getFullYear(),
                    month = firstDay.getMonth(),
                    day = firstDay.getDate(),
                    date = new Date(year, month, day);
                var longDay = new Date(year, month, day).getDay();
                vm.dates = [{
                    date: date.getTime(),
                    shortDate: day,
                    shortDay: weekdayAndMonth.weekday[date.getDay()]
                }]

            while(vm.dates[vm.dates.length-1].date < lastDay) { 
                day++;  
                var longDay = new Date(year, month, day).getDay();       
                vm.dates.push({
                        date: new Date(year, month, day).getTime(),
                        shortDate: day,
                        shortDay: weekdayAndMonth.weekday[longDay]  
                    });
            }
            console.log(vm.dates);
            prepareCompleteAttendanceData();
        }

        function prepareCompleteAttendanceData(){
            angular.forEach(vm.employees, function(employee){
                angular.forEach(vm.dates, function(day, index){
                    if(angular.isUndefined(employee.attendance[index])){
                        var attendanceObj = {
                            "date": day.date,
                            "attendanceCode": "0",
                            "updatedAt": null
                        }
                        employee.attendance.push(attendanceObj);
                    }
                });                
            });
            console.log(vm.employees);
        }

        vm.init = function(a){ 
            var promiseArray = [];
            promiseArray.push(attendanceService.getAttendanceDetailForAllEmpoloyee());
            promiseArray.push(commonService.getAttendanceStatusMaster());
            $q.all(promiseArray).then(function(res){
                vm.employees = res[0];
                vm.attendanceStatusMaster = res[1];
                vm.prepareMonthData();
            }, function(err){
                console.log(err);
            });           
        }
        
        vm.saveAttendanceForEmnployee = function(attendanceForMonth){
            console.log(attendanceForMonth);
        }        
    }])
    .constant('weekdayAndMonth', {
        weekday: ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    });
})();