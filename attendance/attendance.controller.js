(function () {
    'use strict';
	angular.module('employeeApp', ['nvd3', 'moment-picker'])
    .controller('attendanceController', EmployeeController)
    .constant('weekdayAndMonth', {
        weekday: ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    });
    function EmployeeController(weekdayAndMonth) {
        var vm = this; 
        vm.title = 'Attendance';   
        vm.currentYearMonth = moment();        
        vm.weekday = weekdayAndMonth.weekday;
        vm.dates = [];
        vm.init = function(a){ 
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
                    fullDate: date,
                    date: day,
                    isWeekend: (longDay === 6) || (longDay === 0),
                    day: weekdayAndMonth.weekday[date.getDay()]
                }]

            while(vm.dates[vm.dates.length-1].fullDate < lastDay) { 
                day++;  
                var longDay = new Date(year, month, day).getDay();       
                vm.dates.push({
                        fullDate: new Date(year, month, day),
                        date: day,
                        isWeekend: (longDay === 6) || (longDay === 0),
                        day: weekdayAndMonth.weekday[longDay]  
                    });
            }
            prepareCompleteAttendanceData();
        }

        function prepareCompleteAttendanceData(){
            angular.forEach(vm.employees, function(employee){
                angular.forEach(vm.dates, function(day, index){
                    if(angular.isUndefined(employee.monthlyAttendance[index])){
                        var attendanceObj = {
                            "attendanceStatus": 0,
				            "leaveCategory": 0
                        }
                        employee.monthlyAttendance.push(angular.extend({}, attendanceObj, day));
                    }else{
                        angular.extend(employee.monthlyAttendance[index], day);
                    }
                });                
            });
            console.log(vm.employees);
        }

        vm.saveAttendanceForEmnployee = function(attendance){
            console.log(attendance);
        }

        vm.employees = [{
                            "empId": "EMP001",
                            "empName": "Aloke Kantal",
                            "designation": "Manager",
                            "Location": "Kolkata",
                            "status": "Active",
                            "dob": 1531940569282,
                            "present":0,
                            "absent": 0,
                            "holiday": 0,
                            "leave": 0,
                            "late": 0,
                            "weekOff": 0,
                            "sunday": 0,
                            "autoDeduction": 0,
                            "exceptionGrant": 0,
                            "finalDeductions": 0,
                            "total":0,
                            "finalAttendance": 0,
                            "monthlyAttendance": []
                        },
                        {
                            "empId": "EMP002",
                            "empName": "Ashim Kantal",
                            "designation": "Manager",
                            "Location": "Kolkata",
                            "status": "Active",
                            "dob": 1531940569282,
                            "present":0,
                            "absent": 0,
                            "holiday": 0,
                            "leave": 0,
                            "late": 0,
                            "weekOff": 0,
                            "sunday": 0,
                            "autoDeduction": 0,
                            "exceptionGrant": 0,
                            "finalDeductions": 0,
                            "total":0,
                            "finalAttendance": 0,
                            "monthlyAttendance": []
                        },
                        {
                            "empId": "EMP003",
                            "empName": "Jayanta Kumar DAs",
                            "designation": "Manager",
                            "Location": "Kolkata",
                            "status": "Active",
                            "dob": 1531940569282,
                            "present":0,
                            "absent": 0,
                            "holiday": 0,
                            "leave": 0,
                            "late": 0,
                            "weekOff": 0,
                            "sunday": 0,
                            "autoDeduction": 0,
                            "exceptionGrant": 0,
                            "finalDeductions": 0,
                            "total":0,
                            "finalAttendance": 0,
                            "monthlyAttendance": []
                        }
                    ];        
 
    }
})();