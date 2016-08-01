angular.module("contactList").filter("name", function() {
    return function(input) {
        var namesSplitted = input.split(" ");
        var formattedNames = namesSplitted.map(function(ele) {
            if (/(da|de|dos)/.test(ele)) return ele;
            return ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase();
        });
        return formattedNames.join(" ");
    };
});

angular.module("contactList").filter("ellipis", function() {
    return function(input, maxlength) {
        if (input.length <= (maxlength || 10)) return input;
        return input.substring(0, (maxlength || 10)) + "...";
    };
});
