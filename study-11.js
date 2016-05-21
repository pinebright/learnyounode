var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  var dstStream = fs.createReadStream(process.argv[3])

  dstStream.pipe(res)
})
server.listen(Number(process.argv[2]))


/// answer
// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })
//
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
