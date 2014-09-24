var express = require('express')
var server = express()
var exphbs = require('express-handlebars')
server.engine('handlebars', exphbs({defaultLayout: 'layout'}));
server.set('view engine', 'handlebars');

server.get('/', function (req, res) {
  res.render('index')
})

server.get('/stylesheet.css', function (req, res) {
  res.sendFile(__dirname + '/public/css/stylesheet.css')
})

server.get('/:image', function (req, res) {
  res.sendFile(__dirname + '/public/images/' + req.params.image)
})

server.listen(3000)