#!/usr/bin/env node

var fs = require('fs')

fs.readFile('ants.txt', function(err,data){
    var ants = data.toString().split('~')
    var ant = ants[Math.floor(Math.random()*ants.length)]
    console.log(ant)
})