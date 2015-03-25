var path = require("path");
var url = require("url");

var output = [];

var urlPrefix = "https://raw.githubusercontent.com/qunxyz/meteor-jvectormap/master/";

// Base file
output.push({
    file: "jquery-jvectormap-2.0.2.min.js",
    url: url.resolve(urlPrefix, "jquery-jvectormap-2.0.2.min.js")
});

// CSS file
output.push({
    file: "jquery-jvectormap-2.0.2.css",
    url: url.resolve(urlPrefix, "jquery-jvectormap-2.0.2.css")
});

console.log(JSON.stringify(output, null, "    "));
