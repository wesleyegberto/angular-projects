angular.module("uiAccordion", []);

// function to init the directive
angular.module("uiAccordion").run(function ($templateCache) {
	$templateCache.put("directive_templates/accordion.html", '<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-transclude ng-show="isOpened"></div>');
});

angular.module("uiAccordion").directive("uiAccordions", function () {
	return {
		controller: function ($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function (accordion) {
				accordions.push(accordion);
			};

			this.closeAll = function () {
				accordions.forEach(function (accordion) {
					accordion.isOpened = false;
				});
			}
		}
	};
});

angular.module("uiAccordion").directive("uiAccordion", function () {
	return {
		templateUrl: "directive_templates/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require: "^uiAccordions",
		link: function (scope, element, attrs, ctrl) {
			ctrl.registerAccordion(scope);
			scope.open = function () {
				ctrl.closeAll();
				scope.isOpened = true;
			};
		}
	};
});