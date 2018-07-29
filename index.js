#!/usr/bin/env node --harmony

var program = require("commander");

var fs = require("fs");
var path = require("path");

program.version("1.5.0")

program.command("print").action(function() {
  fs.readFile(path.resolve(__dirname, "ants.txt"), function(err, data) {
    var ants = data.toString().split("[break]");
    var ant = ants[Math.floor(Math.random() * ants.length)];
    console.log(ant);
  });
});

program
  .command("set <filename>")
  .description("Sets the file to the profiles")
  .option("-a, --all", "List all files and folders")
  .option("-l, --long", "")
  .action();

program
  .command("add <file>")
  .description("Adds a file to the profiles")
  .option("-a, --all", "List all files and folders")
  .option("-l, --long", "")
  .action();

program.parse(process.argv);

if (program.args.length < 1) {
  fs.readFile(path.resolve(__dirname, "ants.txt"), function(err, data) {
    var ants = data.toString().split("[break]");
    var ant = ants[Math.floor(Math.random() * ants.length)];
    console.log(ant);
  });}
