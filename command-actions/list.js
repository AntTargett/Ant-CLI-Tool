var fs = require("fs");
var path = require("path");

//Provide users with a list to see the main.json file
//Will show the Current profile, the other profule options and their paths
function list() {
    fs.readFile(
        path.resolve(__dirname, "../", "main.json"),
        "utf8",
        function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(
                    "Current Profile " + JSON.parse(data).currentProfile
                );
                console.log(
                    "Profiles " + JSON.stringify(JSON.parse(data).profiles)
                );
            }
        }
    );
}

module.exports = list;
