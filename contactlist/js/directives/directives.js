// Directive Template
angular.module("contactList").directive('bsAlert', [function() {
	return {
		restrict: 'E', // only Elements
		replace: true, // replace the element
		templateUrl: "directive_templates/alert.html", // URL to template
		transclude: true, // insert the element's body to ng-transclude
		scope: { // new scope to template (won't be able to access the controller's scope)
			type: "@", // @ stand for a parameter/attribute with the same name
			closable: "@",
			title: "@",
			message: "=" // allow the two-way bind
		},

		// Link function is called after the template is compiled
		link: function(scope, element, attrs) {
			console.log("Compiled! Scope #" + scope.$id); // if use transclude, should be the same $id from controller's $scope
			//console.log(element); // created element
		}
	};
}]);

angular.module("contactList").directive('uiDate', function($filter) {
	return {
		restrict: 'A',
		require: 'ngModel', // dependecy to another directive
		link: function (scope, element, attrs, ctrl) {
			var _formatDate = function (date) {
				date = date.replace(/[^0-9]+/g, "");
				if(date.length > 2) {
					date = date.substring(0,2) + "/" + date.substring(2);
				}
				if(date.length > 5) {
					date = date.substring(0,5) + "/" + date.substring(5,9);
				}
				return date;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();
			});

			// intercepts the bind to scope
			ctrl.$parsers.push(function (value) {
				if (value.length === 10) {
					var dateArray = value.split("/");
					return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
				}
			});

			// intercepts the bind from scope
			ctrl.$formatters.push(function (value) {
				return $filter("date")(value, "dd/MM/yyyy");
			});
		}
	};
});
