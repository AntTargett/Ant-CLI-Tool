#!/usr/bin/env node --harmony

var program = require("commander");

var fs = require("fs");
var path = require("path");

program.version("1.5.0");

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
        console.log(JSON.parse(data));
      }
    });
  });

program.parse(process.argv);

if (program.args.length < 1) {
  fs.readFile(path.resolve(__dirname, "ants.txt"), function(err, data) {
    var ants = data.toString().split("[break]");
    var ant = ants[Math.floor(Math.random() * ants.length)];
    console.log(ant);
  });
}
