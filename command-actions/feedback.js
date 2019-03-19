var fs = require("fs");
var path = require("path");

//Temporary function to print a random string from the feedback file
//The feedback is not very useful and is directed at a co-worker (sean)
function printFeedback() {
	fs.readFile(path.resolve(__dirname, "../assets/", "feedback.txt"), function(
		err,
		data
	) {
		var feedbacks = data.toString().split("[break]");
		var feedback = feedbacks[Math.floor(Math.random() * feedbacks.length)];

		console.log(feedback);
	});
}

module.exports = printFeedback;
