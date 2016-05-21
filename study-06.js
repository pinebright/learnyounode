var module = require('./module-06')
var folder = process.argv[2]
var ext = process.argv[3]

module(folder, ext, function (err, files) {
  if (err) {
    console.error(err)
  } else {
    files.forEach(function (file) {
      console.log(file)
    })
  }
})


/// answer
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)
//
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
