angular.module("contactList").factory('contactTypesAPI', function($http, config) {
    var _getContactTypes = function() {
        return $http.get(config.baseUrl + "/types");
    };

    return {
        getContactTypes: _getContactTypes
    };
});
