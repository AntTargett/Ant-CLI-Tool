const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

//Provide users with a list to see the main.json file
//Will show the Current file, the other file options and their filenames
function list() {
	fs.readFile(
		path.resolve(__dirname, "../", "main.json"),
		"utf8",
		function readFileCallback(err, data) {
			if (err) {
				console.log(err);
			} else {
				console.log(
					"Current File " + chalk.keyword("green")(JSON.parse(data).currentFile)
				);
				fs.readdir(path.resolve(__dirname, "../", "asciiArt"), function (err, items) {
					console.log("Files: ");
					items.forEach(item => {
						console.log("Name: " + chalk.keyword("green")(item.replace(".txt", "")) + " File: " + chalk.keyword("green")(item));
					})

				});

			}
		}
	);


}

module.exports = list;
