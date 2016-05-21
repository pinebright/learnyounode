var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  var urlInfo = url.parse(req.url, true)
  if (urlInfo['pathname'] === '/api/parsetime') {
    var date = new Date(urlInfo['query']['iso'])
    var json = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
    res.end(JSON.stringify(json))
  } else if (urlInfo['pathname'] === '/api/unixtime') {
    res.end(JSON.stringify({ unixtime: new Date(urlInfo['query']['iso']).getTime() }))
  }
})

server.listen(process.argv[2])


/// answer
// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
