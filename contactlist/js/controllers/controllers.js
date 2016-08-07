angular.module("contactList").controller('IndexController', function($scope,
    $filter, contactTypesAPI, contactsAPI) {

    $scope.appName = "Debtor Contacts List";

    var uppercaseFilter = $filter("uppercase");

    $scope.contactTypes = [];
    $scope.contacts = [];

    $scope.contactTypes.forEach(function(type) {
        type.category = uppercaseFilter(type.category);
    });

    var loadContactTypes = function() {
        contactTypesAPI.getContactTypes().success(function(data,
            status) {
            data.forEach(function(type) {
                type.category = uppercaseFilter(
                    type.category);
            });
            $scope.contactTypes = data;
        }).error(function(data, status) {
            $scope.type = "danger";
            $scope.message = "Occurred an error during the load the types."
        });
    };
    var loadContacts = function() {
        contactsAPI.getContacts().success(function(data, status) {
            $scope.contacts = data;
        }).error(function(data, status) {
            $scope.type = "danger";
            $scope.message = "Occurred an error during the load the contacts."
        });
    };

    $scope.addContact = function(contact) {
        contactsAPI.saveContact(contact).success(function() {
            $scope.type = "success";
            $scope.message = "Debtor registered."
            delete $scope.contact;
            $scope.contactForm.$setPristine();
            loadContacts();
        }).error(function(data, status) {
            $scope.type = "danger";
            $scope.message = "Occurred an error."
        });
    };
    $scope.remContacts = function(contacts) {
        $scope.contacts = contacts.filter(function(contact) {
            if (!contact.selected) return contact;
        });
    };
    $scope.isSelected = function(contacts) {
        return contacts.some(function(contact) {
            return contact.selected;
        });
    };

    loadContactTypes();
    loadContacts();
});
