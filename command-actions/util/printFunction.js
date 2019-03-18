const chalk = require("chalk");

// Aim is to log to the console random index from data, if colours are provided use the colours, else just log
function printFunction(err, data) {
	var arrayOfArt = data.toString().split("[break]");
	var randomArt = arrayOfArt[Math.floor(Math.random() * arrayOfArt.length)];
	var lines = randomArt.toString().split("\n");
	let colours = [];
	// Attempt to parse first line to check if colours have been specified
	try {
		colours = JSON.parse(lines[0]);
	} catch (err) {
		colours = [];
	}
	//Only try to attempt to print colours if colour options have been provided
	if (colours.length >= 1 && Array.isArray(colours)) {
		lines.splice(0, 1);
		if (colours.length === 1 && colours[0] === "rainbow") {
			// Rainbow is a specifc colour type that will print out the data
			// with each line representing a colour in the rainbow
			const rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];
			var rainbowIndex = 0;
			lines.forEach(line => {
				console.log(chalk.keyword(rainbow[rainbowIndex])(line.toString()));
				if (rainbowIndex < rainbow.length - 1) {
					rainbowIndex++;
				} else {
					rainbowIndex = 0;
				}
			});
		} else {
			// Handles the case where colours are supplied 
			var colourIndex = 0;
			lines.forEach(line => {
				// Aim is to print each line of art following the provided colours, looping back around when reaching the end of the array
				console.log(chalk.keyword(colours[colourIndex])(line.toString()));
				if (colourIndex < colours.length - 1) {
					colourIndex++;
				} else {
					colourIndex = 0;
				}
			});
		}
	} else {
		// No colours supplied
		console.log(randomArt);
	}
}
module.exports = printFunction;
