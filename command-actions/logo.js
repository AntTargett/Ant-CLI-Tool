var fs = require("fs");
var path = require("path");

function logo() {
    fs.readFile(
        path.resolve(__dirname, "../askiiArt/", "imanant.txt"),
        function(err, data) {
            var logo = data.toString();
            console.log(logo);
            console.log("1.8.0");
        }
    );
}
module.exports = logo;
