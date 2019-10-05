var fs = require("fs");
var path = require("path");
const chalk = require("chalk");
//Changes current file to the file provided
function setcurrentFile(file) {
	fs.readdir(path.resolve(__dirname, "../", "asciiArt"), function (err, items) {
		if (err) {
			console.log(err);
		} else {
			// To validate the text file with filename 'file' exists in the folder
			if (
				items.find(
					item => item.replace(".txt", "") === file || (file.includes(".txt") && file === item)
				)
			) {
				fs.readFile(
					path.resolve(__dirname, "../", "main.json"),
					"utf8",
					function readFileCallback(err, data) {
						if (err) {
							console.log(err);
						} else {
							var obj = JSON.parse(data); //now it is an object
							obj.currentFile = file; //add updated file data
							var json = JSON.stringify(obj); //convert it back to string json
							fs.writeFile(
								path.resolve(__dirname, "../", "main.json"),
								json,
								"utf8",
								function writeFileCallback(err) {
									if (err) {
										console.log(err);
									} else {
										console.log(
											chalk.keyword("green")(
												"Successfully swapped file to " + file
											)
										);
									}
								}
							);
						}
					}
				);
			} else {
				console.log(
					chalk.keyword("red")(
						"File does not exist, please create a text file matching that name"
					)
				);
				console.log("Files: ");
				items.forEach(item => {
					console.log(
						"Name: " +
						chalk.keyword("green")(item.replace(".txt", "")) +
						" Filename: " +
						chalk.keyword("green")(item)
					);
				});
			}
		}
	});
}
module.exports = setcurrentFile;
