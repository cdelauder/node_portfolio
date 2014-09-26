var express = require('express')
var server = express()
var exphbs = require('express-handlebars')
server.engine('handlebars', exphbs({defaultLayout: 'layout'}));
server.set('view engine', 'handlebars');
var qs = require('querystring')

server.get('/', function (req, res) {
  res.render('index')
})

server.get('/portfolio', function (req, res) {
  res.render('portfolio', {layout: false})
})

server.get('/contact', function (req, res) {
  res.render('contact', {layout: false})
})

server.get('/home', function (req, res) {
  res.render('home', {layout: false})
})

server.get('/email', function (req, res) {
  res.render('email', {layout: false})
})

server.get('/resume', function (req, res) {
  res.render('resume', {layout: false})
})

server.get('/stylesheet.css', function (req, res) {
  res.sendFile(__dirname + '/public/css/stylesheet.css')
})

server.get('/chrisdelauder.pdf', function (req, res) {
  // res.setHeader('Content-disposition', 'attachment')
  // res.setHeader('Content-type', 'pdf')
  // res.download(__dirname + '/public/files/chrisdelauder.pdf')
  res.sendFile(__dirname + '/public/files/chrisdelauder.pdf')
})

server.get('/client.js', function (req, res) {
  res.sendFile(__dirname + '/public/js/client.js')
})

server.get('/:image', function (req, res) {
  res.sendFile(__dirname + '/public/images/' + req.params.image)
})

server.post('/email', function (req, res) {
  req.on('data', function (chunk) {
    var body = chunk.toString()
    var form = qs.parse(body)
    makeEmail(form)
  })
  function makeEmail(form) {
    var mailer = require('nodemailer')
    var config = require('./config.json')
    var transporter = mailer.createTransport({
      service: 'Gmail',
      auth: config
    });
    var mailOptions = {
      to: config.user,
      replyTo: form['email'],
      from: form['email'],
      subject: form['subject'],
      body: form['body']
    }
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.render('contact')
    }else{
        res.render('contact')
    }
});
  }
})


server.listen(3000)