var express = require('express')
var server = express()
var exphbs = require('express-handlebars')
server.engine('handlebars', exphbs({defaultLayout: 'layout'}));
server.set('view engine', 'handlebars');

server.get('/', function (req, res) {
  res.render('index')
})

server.get('/portfolio', function (req, res) {
  res.render('portfolio')
})

server.get('/contact', function (req, res) {
  res.render('contact')
})

server.get('/email', function (req, res) {
  //lot more to do here
  res.render('email')
})

server.get('/stylesheet.css', function (req, res) {
  res.sendFile(__dirname + '/public/css/stylesheet.css')
})

server.get('/client.js', function (req, res) {
  console.log('wtf')
  res.sendFile(__dirname + '/public/js/client.js')
})

server.get('/:image', function (req, res) {
  res.sendFile(__dirname + '/public/images/' + req.params.image)
})

server.listen(3000)