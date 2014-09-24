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

server.get('/home', function (req, res) {
  res.render('home')
})

server.get('/email', function (req, res) {
  var gmailPW = require('/.env')
  console.log($PW)
  res.render('email')
})

server.get('/resume', function (req, res) {
  res.render('resume')
})

server.get('/stylesheet.css', function (req, res) {
  res.sendFile(__dirname + '/public/css/stylesheet.css')
})

server.get('/chrisdelauder.pdf', function (req, res) {
  res.sendFile(__dirname + '/public/files/chrisdelauder.pdf')
})

server.get('/client.js', function (req, res) {
  res.sendFile(__dirname + '/public/js/client.js')
})

server.get('/:image', function (req, res) {
  res.sendFile(__dirname + '/public/images/' + req.params.image)
})

server.post('/email', function (req, res) {
  var mailer = require('nodemailer')
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'cdelauder@gmail.com',
      pass: $PW
    }
  });
})

server.listen(3000)