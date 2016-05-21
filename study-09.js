var http = require('http')
var bl = require('bl')
var urls = [process.argv[2], process.argv[3], process.argv[4]]
var results = ['', '', '']

urls.forEach(function (url, i) {
  http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
      if (err)
        return console.error(error)
      results[i] = data.toString()
      if (results[0] != '' && results[1] != '' && results[2] != '') {
        console.log(results[0])
        console.log(results[1])
        console.log(results[2])
      }
    }))
  })
})


/// answer
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
//
//       results[index] = data.toString()
//       count++
//
//       if (count == 3)
//         printResults()
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++)
//   httpGet(i)
