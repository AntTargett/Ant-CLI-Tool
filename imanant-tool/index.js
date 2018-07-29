#!/usr/bin/env node --harmony

var program = require("commander");

var fs = require("fs");
var path = require("path");

program
  .option("-s, --set <filepatb>", "The file path to a set of askii art")
  .action(function() {
    fs.readFile(path.resolve(__dirname, "ants.txt"), function(err, data) {
      var ants = data.toString().split("~");
      var ant = ants[Math.floor(Math.random() * ants.length)];
      console.log(ant);
    });
  })
  .parse(process.argv);

fs.readFile(path.resolve(__dirname, "ants.txt"), function(err, data) {
  var ants = data.toString().split("~");
  var ant = ants[Math.floor(Math.random() * ants.length)];
  console.log(ant);
});
