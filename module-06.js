var fs = require('fs')
var path = require('path')

module.exports = function (folder, ext, callback) {
  var list = []
  fs.readdir(folder, function (err, files) {
    if (err) {
      return callback(err)
    } else {
      files.forEach(function (file) {
        if (path.extname(file) === '.' + ext) {
          list.push(file)
        }
      })
    }
    callback(null, list)
  })
}


/// answer
// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }
