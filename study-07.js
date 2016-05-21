var http = require('http')
var url = process.argv[2]

http.get(url, function (res) {
  var result = []
  res.setEncoding('utf8')

  res.on('data', function (chunk) {
    result.push(chunk)
  })

  res.on('end', function (res) {
    result.forEach(function (line) {
      console.log(line)
    })
  })
})


/// answer
// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)
