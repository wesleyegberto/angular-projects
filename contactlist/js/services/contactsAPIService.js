angular.module("contactList").service('contactsAPI', function($http, config) {
    this.getContacts = function() {
        return $http.get(config.baseUrl + "/contacts");
    }

    this.saveContact = function(contact) {
        return $http.post(config.baseUrl + "/contacts", contact);
    }
});
