var path = require("path");
var url = require("url");

var output = [];

var urlPrefix = "http://jvectormap.com/";

// Base file
output.push({
    file: "jquery-jvectormap-2.0.2.min.js",
    url: url.resolve(urlPrefix, "js/jquery-jvectormap-2.0.2.min.js"),
    bare: true
});

// CSS file
output.push({
    file: "jquery-jvectormap-2.0.2.css",
    url: url.resolve(urlPrefix, "css/jquery-jvectormap-2.0.2.css")
});

console.log(JSON.stringify(output, null, "    "));
