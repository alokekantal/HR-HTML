  (function () {
    'use strict';
	angular.module('employeeApp')
  .directive("fileinput", [function() {
    return {
      scope: {
        fileinput: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          var file = changeEvent.target.files[0];
          var extention = file.name.substr(file.name.lastIndexOf('.')+1).toLowerCase();
          if(extention == 'xls' || extention == 'xlsx'){
              scope.fileinput = file;
          }else{
              alert("Please select excel file!");
          }
          element.val('');
          scope.$apply();
        });
      }
    }
  }]);
})();