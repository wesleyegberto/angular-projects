angular.module("contactList").value('config', {
    baseUrl: "http://localhost:3412"
});

angular.module("contactList").config(function($routeProvider) {
	$routeProvider.when("/contacts", {
		templateUrl: "view/contacts.html",
		controller: "contactsCtrl"
	}).when("/create", {
		templateUrl: "view/create_contact.html",
		controller: "newContactCtrl",
		resolve: { // load the types to inject at controller, if occur some error the view won't be even called
			contactTypes: function(contactTypesAPI) {
				return contactTypesAPI.getContactTypes();
			}
		}
	}).when("/error", {
		templateUrl: "view/error.html"
	}).otherwise({ redirectTo: '/contacts' });
});