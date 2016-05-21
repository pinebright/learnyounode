var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
var array = str.split('\n')

console.log(array.length - 1)

/// answer
// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
