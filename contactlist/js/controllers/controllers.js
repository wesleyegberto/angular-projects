angular.module("contactList").controller('contactsCtrl', function($scope, contactTypesAPI, contactsAPI) {
    $scope.contacts = [];

    var loadContacts = function() {
        contactsAPI.getContacts().success(function(data, status) {
            $scope.contacts = data;
        }).error(function(data, status) {
            $scope.type = "danger";
            $scope.message = "Occurred an error during the load the contacts."
        });
    };

    $scope.remContacts = function(contacts) {
        $scope.contacts = contacts.filter(function(contact) {
            if (!contact.selected) return contact;
        });
        $scope.type = "success";
        $scope.message = "Contact removed."
        $scope.verifySelectedContact($scope.contacts);
    };
    $scope.verifySelectedContact = function(contacts) {
        $scope.hasSelectedContact = contacts.some(function(contact) {
            return contact.selected;
        });
    };

    loadContacts();
});

angular.module("contactList").controller('newContactCtrl', function($scope, $location, uppercaseFilter, contactsAPI, contactTypes) {
    // contactTypes is inject from the route (section resolve)
    $scope.contactTypes = contactTypes.data;

    $scope.contactTypes.forEach(function(type) {
        type.category = uppercaseFilter(type.category);
    });

    $scope.addContact = function(contact) {
        contactsAPI.saveContact(contact).success(function() {
            //$scope.type = "success";
            //$scope.message = "Debtor registered."
            delete $scope.contact;
            $scope.contactForm.$setPristine();
            $location.path("/contacts");
        }).error(function(data, status) {
            $scope.type = "danger";
            $scope.message = "Occurred an error."
        });
    };
});
