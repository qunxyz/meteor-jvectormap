var path = require("path");
var url = require("url");

var output = [];

var jsPrefix = "http://jvectormap.com/js/";
var cssPrefix = "http://jvectormap.com/css/";

// Base file
output.push({
    file: "jquery-jvectormap-2.0.2.min.js",
    url: url.resolve(jsPrefix, "jquery-jvectormap-2.0.2.min.js")
});

// CSS file
output.push({
    file: "jquery-jvectormap-2.0.2.css",
    url: url.resolve(cssPrefix, "jquery-jvectormap-2.0.2.css")
});

console.log(JSON.stringify(output, null, "    "));
