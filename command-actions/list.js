const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

//Provide users with a list to see the main.json file
//Will show the Current profile, the other profule options and their paths
function list() {
	fs.readFile(
		path.resolve(__dirname, "../", "main.json"),
		"utf8",
		function readFileCallback(err, data) {
			if (err) {
				console.log(err);
			} else {
				console.log(
					"Current Profile " + chalk.keyword("green")(JSON.parse(data).currentProfile)
				);
				console.log("Profiles: ");
				Object.entries(JSON.parse(data).profiles).forEach(profile=>{
					console.log("Name: "+ chalk.keyword("green")(profile[0]) +" Filename: "+chalk.keyword("green")(profile[1].fileName));
				});
			}
		}
	);
}

module.exports = list;
