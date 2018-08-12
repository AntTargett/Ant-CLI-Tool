var fs = require("fs");
var path = require("path");

//The aim of this funciton is to add a path (supplied by user)
// to the main.json file to make it selectable
function addProfile(filePath) {
  console.log(filePath);
  fs.readprofile(path.resolve(filePath), "utf8", function readprofileCallback(
    err,
    data
  ) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
module.exports = addProfile;
