const fs = require("fs");
const path = require("path");
const printFunction=require("./util/printFunction")
//Prints a random askii art from the currently selected profile
function printCurrentProfile() {
	fs.readFile(path.resolve(__dirname, "../", "main.json"), function(
		err,
		data
	) {
		var jsonFile = JSON.parse(data);
		var currentProfile =
          jsonFile.profiles[jsonFile.currentProfile].fileName;
		fs.readFile(
			path.resolve(__dirname, "../askiiArt/", currentProfile),
			printFunction
		);
	});
}
module.exports = printCurrentProfile;
