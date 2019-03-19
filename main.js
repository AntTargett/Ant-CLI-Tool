#!/usr/bin/env node --harmony

//Main file that describes how each function is called
//Catches and displays errors, describes the helps option and version option

const program = require("commander");
const chalk = require("chalk");
const CommandActions = require("./command-actions/index");

program.command("print").action(function() {
	CommandActions.print();
});


program
	.command("set <file>")
	.description("Sets the file to the filename provided")
	.option("-a, --all", "List all files and folders")
	.option("-l, --long", "")
	.action(function(file) {
		CommandActions.set(file);
	});


program
	.command("list")
	.description("List avaiable files")
	.action(function() {
		CommandActions.list();
	});
program
	.command("feedback")
	.description("Allows users to give feedback")
	.action(function() {
		CommandActions.feedback();
	});
program.on("command:*", function() {
	console.error(
		chalk.red(
			"Invalid command: "+program.args.join()+"\nSee --help for a list of available commands.",
		)
	);
	process.exit(1);
});
program.option("-v, --Version", "Prints out the version number");

program.parse(process.argv);

if (program.Version) {
	CommandActions.logo();
}

if (program.args.length < 1 && !program.Version) {
	CommandActions.print();
}
