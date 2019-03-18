var fs = require("fs");
var path = require("path");
const chalk = require("chalk");
//Changes profile to the profile given
//Writes to a json object as this application is meant to work without an internet connection
function setCurrentProfile(profile) {
	fs.readFile(
		path.resolve(__dirname, "../", "main.json"),
		"utf8",
		function readFileCallback(err, data) {
			if (err) {
				console.log(err);
			} else {
				var obj = JSON.parse(data); //now it is an object
				if(Object.keys(obj.profiles).find(item=>item===profile)){
					obj.currentProfile = profile; //add updated profile data
					var json = JSON.stringify(obj); //convert it back to string json
					fs.writeFile(
						path.resolve(__dirname, "../", "main.json"),
						json,
						"utf8",
						function writeFileCallback(err) {
							if (err) {
								console.log(err);
							} else {
								console.log(chalk.keyword("green")("Successfully swapped profile"))
							}
						}
					);
				}else{
					console.log(chalk.keyword("red")("Profile does not exist, please create a profile matching that name"))
				}
			
			}
		}
	);
}
module.exports = setCurrentProfile;
