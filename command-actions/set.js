var fs = require("fs");
var path = require("path");

function setCurrentProfile(file) {
    fs.readFile(
      path.resolve(__dirname, "main.json"),
      "utf8",
      function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {
          obj = JSON.parse(data); //now it an object
          obj.currentProfile = file; //add some data
          json = JSON.stringify(obj); //convert it back to json
          fs.writeFile(
            path.resolve(__dirname, "main.json"),
            json,
            "utf8",
            function writeFileCallback(err, data) {
              if (err) {
                console.log(err);
              } else {
                console.log("Successfully swapped profile");
              }
            }
          ); // write it back
        }
      }
    );
  }
export default setCurrentProfile  