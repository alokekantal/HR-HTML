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

        vm.day = moment();
   
        vm.currentYearMonth = moment();
        vm.weekday = weekdayAndMonth.weekday;
        vm.dates = [];

        vm.init = function(){ 
                var y = vm.currentYearMonth.toDate().getFullYear(),
                    m = vm.currentYearMonth.toDate().getMonth(),
                    firstDay = new Date(y, m, 1),
                    lastDay = new Date(y, m + 1, 0),
                    year = firstDay.getFullYear(),
                    month = firstDay.getMonth(),
                    day = firstDay.getDate(),
                    date = new Date(year, month, day);
                vm.dates = [{
                    fullDate: date,
                    date: day,
                    isWeekend: (day === 6) || (day === 0),
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
            console.log(vm.dates)
        }

        vm.products = [{
                        "empId": "EMP001",
                        "empName": "Aloke Kantal",
                        "designation": "Manager",
                        "Location": "Kolkata",
                        "status": "Active",
                        "dob": "1991-07-25T00:00:00Z",
                        "items": [
                                        {"prodDetailId": 17890,
                                            "prodDetailDesc": "PS 3",
                                            "amount": "150",
                                            "qty":1
                                        },{"prodDetailId": 17891,
                                            "prodDetailDesc": "Heart shape Ring",
                                            "amount": "100",
                                            "qty": 1
                                        }]
                            },
                            {
                        "empId": "EMP002",
                        "empName": "Ashim Kantal",
                        "designation": "Tech. Lead",
                        "Location": "Kolkata",
                        "status": "Active",
                        "dob": "1985-02-15T00:00:00Z",
                        "items": [
                                        {"prodDetailId": 17890,
                                            "prodDetailDesc": "PS 3",
                                            "amount": "150",
                                            "qty":1
                                        },{"prodDetailId": 17891,
                                            "prodDetailDesc": "Heart shape Ring",
                                            "amount": "100",
                                            "qty": 1
                                        }]
                            }];

        vm.collapse = function (event) {
            $(event.target).toggleClass("glyphicon-chevron-down");
        };
        
 
    }
})();