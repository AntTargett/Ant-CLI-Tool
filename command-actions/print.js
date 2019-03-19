const fs = require("fs");
const path = require("path");
const printFunction=require("./util/printFunction")
//Prints a random askii art from the currently selected file
function printcurrentFile() {
	fs.readFile(path.resolve(__dirname, "../", "main.json"), function(
		err,
		data
	) {
		var jsonFile = JSON.parse(data);
		var currentFile = jsonFile.currentFile
		fs.readFile(
			path.resolve(__dirname, "../askiiArt/", currentFile+".txt"),
			printFunction
		);
	});
}
module.exports = printcurrentFile;
