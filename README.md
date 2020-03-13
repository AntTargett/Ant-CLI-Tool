# Ant CLI Tool (imanant tool)

The aim of this small project is to serve as a Template project for other command line Nodejs projects.

Idea from [Kyle Robinson Young](https://www.youtube.com/watch?v=C9xGEJ80jjs) who created a cli tool that printed out ascii art

Cli tool that prints out aski ant art when typing in the command imanant :ant:

Find my package [here](https://www.npmjs.com/package/imanant) :ant:

#### To install

npm install -g imanant

#### Commands

Default command specification is the print command

-   -h/--help : Lists out commands and options
-   -v/--version: Displays version number
-   list : List the files available in the asciiArt directory
-   print : prints out a random ascii art based on the current file
-   set [file] : Takes a filename arguement and sets the current file to that txt file

#### Example

![](Imanant-example.gif)

## To do

-   [x] Swap between files
-   [x] Add Colour :ok_hand:
-   [ ] Add documentation for adding your own ascii file
-   [ ] Add gif to show CLI usage
-   [ ] Update Feedback function
-   [ ] Convert to Typescript
-   [ ] Add Testing
