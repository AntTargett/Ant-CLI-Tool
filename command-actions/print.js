var fs = require("fs");
var path = require("path");

function printCurrentProfile() {
    fs.readFile(path.resolve(__dirname, "main.json"), function(err, data) {
      var jsonFile = JSON.parse(data);
      var currentProfile = jsonFile.profiles[jsonFile.currentProfile].fileName;
      fs.readFile(path.resolve(__dirname, currentProfile), function(err, data) {
        var ants = data.toString().split("[break]");
        var ant = ants[Math.floor(Math.random() * ants.length)];
        console.log(ant);
      });
    });
  }
export default printCurrentProfile  