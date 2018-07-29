#!/usr/bin/env node --harmony

var program = require("commander");

var fs = require("fs");
var path = require("path");

// fs.readFile(path.resolve(__dirname, "imanant.txt"), function(err, data) {
//   var logo = data.toString();
//   version = logo;
// });

// program.version("1.6.0").on("-V,--version", function() {
//   console.log("hi");
// });

program.command("print").action(function() {
  fs.readFile(path.resolve(__dirname, "index.json"), function(err, data) {
    var jsonFile = JSON.parse(data);
    var currentProfile = jsonFile.profiles[jsonFile.currentProfile].fileName;
    fs.readFile(path.resolve(__dirname, currentProfile), function(err, data) {
      var ants = data.toString().split("[break]");
      var ant = ants[Math.floor(Math.random() * ants.length)];
      console.log(ant);
    });
  });
});

program
  .command("set <file>")
  .description("Sets the file to the profiles")
  .option("-a, --all", "List all files and folders")
  .option("-l, --long", "")
  .action(function(file) {
    fs.readFile("index.json", "utf8", function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data); //now it an object
        obj.currentProfile = file; //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile("index.json", json, "utf8", function writeFileCallback(
          err,
          data
        ) {
          if (err) {
            console.log(err);
          } else {
            console.log("Successfully swapped profile");
          }
        }); // write it back
      }
    });
  });
program
  .arguments("<pathToFile>")
  .command("add <pathToFile>")
  .description("Adds a file to the profiles")
  .action(function(pathToFile) {
    console.log("Add a file");
  });

program
  .command("list")
  .description("List avaiable profiles")
  .action(function() {
    fs.readFile("index.json", "utf8", function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Current Profile " + JSON.parse(data).currentProfile);
        console.log("Profiles " + JSON.stringify(JSON.parse(data).profiles));
      }
    });
  });

program.on("command:*", function() {
  console.error(
    "Invalid command: %s\nSee --help for a list of available commands.",
    program.args.join(" ")
  );
  process.exit(1);
});
// console.log(program)
program
  .option("-v, --Version", "Prints out the version number")

program.parse(process.argv);


if (program.Version) {
  fs.readFile(path.resolve(__dirname, "imanant.txt"), function(err, data) {
    var logo = data.toString();
    console.log(logo);
    console.log("1.6.0");
  });
}

if (program.args.length < 1 && !program.Version) {
  fs.readFile(path.resolve(__dirname, "ants.txt"), function(err, data) {
    var ants = data.toString().split("[break]");
    var ant = ants[Math.floor(Math.random() * ants.length)];
    console.log(ant);
  });
}
