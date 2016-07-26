var express = require('express');
var bodyParser = require('body-parser');

var app = new express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var contactTypes = [
	{code: 1, category: 'Number', description: 'Telephone'},
	{code: 2, category: 'Number', description: 'Cell phone'},
	{code: 3, category: 'Text', description: 'E-mail'},
	{code: 4, category: 'Text', description: 'Address'}
];

var contacts = [
	{name: "Odair Jose", value: "99998888", type: contactTypes[1], amount: 54.2},
	{name: "Thomas Anderson", value: "99997777", type: contactTypes[1], amount: 20},
	{name: "Bruce Banner", value: "99996666", type: contactTypes[1], amount: 10.50}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/contacts', function(req, res) {
	res.json(contacts);
});

app.post('/contacts', function(req, res) {
	contacts.push(req.body);
	res.json(true);
});

app.get('/types', function(req, res) {
	res.json(contactTypes);
});
