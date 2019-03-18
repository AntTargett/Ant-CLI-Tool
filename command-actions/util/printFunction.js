
const chalk = require("chalk");


// Aim is to log to the console random index from data, if colours are provided use the colours, else just log
function printFunction(err, data){
	var arrayOfArt = data.toString().split("[break]");
	var randomArt = arrayOfArt[Math.floor(Math.random() * arrayOfArt.length)];
	var lines= randomArt.toString().split("\n")
	let colours=[]
	try {
		colours= JSON.parse(lines[0]) 
	} catch(err){
		colours=[]
	}
	if(colours.length>=1 && Array.isArray(colours)){
		lines.splice(0,1)
		if(colours.length===1){
			// Rainbow is a specifc colour type that will print out the data 
			// with each line representing a colour in the rainbow
			if(colours[0]==="rainbow"){
				const rainbow=["red", "orange", "yellow", "green", "blue", "purple"]
				var rainbowIndex=0
				lines.forEach(line=>{
					console.log(chalk.keyword(rainbow[rainbowIndex])(line.toString()))
					if(rainbowIndex<rainbow.length-1){
						rainbowIndex++
					}else{
						rainbowIndex=0
					}
				})     
			}else{
				console.log(chalk.keyword(colours[0])(lines.toString()))
			}
		} else{
			var colourIndex=0
			lines.forEach(line=>{
				console.log(chalk.keyword(colours[colourIndex])(line.toString()))
				if(colourIndex<colours.length-1){
					colourIndex++
				}else{
					colourIndex=0
				}
			})               
		}
	} else{
		console.log(randomArt)
	}
}
module.exports = printFunction