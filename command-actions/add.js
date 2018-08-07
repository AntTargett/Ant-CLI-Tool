var fs = require("fs");
var path = require("path");

function setCurrentProfile(file) {
  console.log(file);
  fs.readFile(path.resolve(file), "utf8", function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
module.exports = setCurrentProfile;
