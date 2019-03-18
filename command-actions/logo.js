const fs = require("fs");
const path = require("path");
const printFunction=require("./util/printFunction")
const pkg = require("../package.json")
//This function is used to print the logo when the user checks the version
function logo() {
	fs.readFile(
		path.resolve(__dirname, "../askiiArt/", "imanant.txt"),
		printFunction
	)
	console.log(pkg.version);
}
module.exports = logo;
