var fs = require("fs");
var path = require("path");

function list() {
    fs.readFile(
      path.resolve(__dirname, "../","main.json"),
      "utf8",
      function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("Current Profile " + JSON.parse(data).currentProfile);
          console.log("Profiles " + JSON.stringify(JSON.parse(data).profiles));
        }
      }
    );
  }

module.exports=list