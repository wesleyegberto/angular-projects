// Var to static web server in NodeJS
var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
port = process.argv[2] || 8888;

// Var to JSON 
var express = require('express');
var bodyParser = require('body-parser');

var app = new express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var contactTypes = [{
    code: 1,
    category: 'Number',
    description: 'Telephone'
}, {
    code: 2,
    category: 'Number',
    description: 'Cell phone'
}, {
    code: 3,
    category: 'Text',
    description: 'E-mail'
}, {
    code: 4,
    category: 'Text',
    description: 'Address'
}];

var contacts = [{
    name: "Odair Jose",
    value: "99998888",
    type: contactTypes[1],
    amount: 54.2
}, {
    name: "THOMAS ANDERSON",
    value: "99997777",
    type: contactTypes[1],
    amount: 20
}, {
    name: "Bruce Banner",
    value: "99996666",
    type: contactTypes[1],
    amount: 10.50
}];

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

app.listen(process.env.PORT || 3412);

// Static Web Server (thanks to @ryanflorence [https://gist.github.com/ryanflorence/701407])
http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname, filename = path.join(process.cwd(), uri);

    path.exists(filename, function(exists) {
        if (!exists) {
            response.writeHead(404, {
                "Content-Type": "text/plain"
            });
            response.write("404 Not Found\n");
            response.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) filename += '/index.html';

        fs.readFile(filename, "binary", function(err, file) {
            if (err) {
                response.writeHead(500, {
                    "Content-Type": "text/plain"
                });
                response.write(err + "\n");
                response.end();
                return;
            }

            response.writeHead(200);
            response.write(file, "binary");
            response.end();
        });
    });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:"
			+ port + "/\nCTRL + C to shutdown");