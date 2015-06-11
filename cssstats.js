'use strict'

var fs = require('fs')
var cssstats = require('cssstats')
var glob = require('glob')

function getCssstats() {
  glob('./css/*.css', function(_, cssFiles) {
    cssFiles.forEach(function(file) {
      try {
        var css = fs.readFileSync(file, 'utf8')
        var stats = cssstats(css)
        fs.writeFileSync('cssstats/' + file.split('./css/')[1] + '.json', JSON.stringify(stats))
      } catch(e) {
        console.log(e)
      }
    })
  })
}

getCssstats()
