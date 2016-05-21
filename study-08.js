var http = require('http')
var url = process.argv[2]

http.get(url, function (res) {
  var count = 0
  var contents = ''

  res.setEncoding('utf8')

  res.on('data', function (chunk) {
    count += chunk.length
    contents += chunk
  })

  res.on('end', function (res) {
    console.log(count)
    contents.split('\n').forEach(function (line) {
      console.log(line)
    })
  })
})

/// answer
// var http = require('http')
// var bl = require('bl')
//
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
