angular.module("contactList").directive('bsAlert', [function () {
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
		}
	};
}])