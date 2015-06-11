'use strict'

var fs = require('fs')
var parse = require('csv-parse')
var getCss = require('get-css')

function getTheCss() {

  parse(fs.readFileSync('alexa-top-100-websites.csv', 'utf8').trim(), { comment: '#' }, function(err, data) {
    data.forEach(function(site) {
      getCss(site[1]).then(function(css) {
        fs.writeFileSync('css/' + site[0] + '-' + site[1] + '.css', css.css)
      })
    })
  })
}

getTheCss()
