const fs = require("fs");
const path = require("path");
const chalk = require("chalk")
const printFunction=require("./util/printFunction")
const pkg = require("../package.json")

//This function is used to print the logo when the user checks the version
function logo() {
	fs.readFile(
		path.resolve(__dirname, "../assets/", "ant.txt"),
		printFunction
	)
	console.log(chalk.green(pkg.version));
}
module.exports = logo;
