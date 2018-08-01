var fs = require("fs");
var path = require("path");

function printFeedback() {
  fs.readFile(path.resolve(__dirname, "../askiiArt/", "feedback.txt"), function(
    err,
    data
  ) {
    var feedbacks = data.toString().split("[break]");
    var feedback = feedbacks[Math.floor(Math.random() * feedbacks.length)];
    console.log(feedback);
  });
}

module.exports = printFeedback;
