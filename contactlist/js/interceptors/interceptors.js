angular.module("contactList").factory("timestampInterceptor", function($q, $location) {
	return {
		request: function(config) {
			var url = config.url;

			// skip the request to templates or views
			if(url.indexOf("directive_templates") > -1 || url.indexOf("view") > -1)
				return config;

			var timestamp = new Date().getTime();
			if(url.indexOf("?") > 0) {
				config.url = config.url + "&timestamp=" + timestamp;
			} else {
				config.url = config.url + "?timestamp=" + timestamp;
			}

			return config;
		},
		requestError: function(rejection) {
			return $q.reject(rejection);
		},
		response: function(config) {
			return config;
		},
		responseError: function (rejection) {
			if(rejection.status == 404) {
				$location.path("/error");
			}
			return $q.reject(rejection);	
		}
	};
});

angular.module("contactList").factory("loadingInterceptor",function($q, $rootScope, $timeout) {
	return {
		request: function(config) {
			$rootScope.loading = true;
			return config;
		},
		requestError: function(rejection) {
			$rootScope.loading = false;
			return $q.reject(rejection);
		},
		response: function(config) {
			//$timeout(function() {
			$rootScope.loading = false; 
			//}, 500); // create a delay
			return config;
		},
		responseError: function(rejection) {
			$rootScope.loading = false;
			return $q.reject(rejection);
		}
	};
});

angular.module("contactList").config(function($httpProvider) {
	$httpProvider.interceptors.push("timestampInterceptor");
	$httpProvider.interceptors.push("loadingInterceptor");
});