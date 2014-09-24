$(document).ready(bindListeners)

function bindListeners () {
  $('.content-links').one('click', gethtml)
  $('.email-link').one('click', getOverlayContent)
}

function gethtml (e) {
  e.preventDefault()
  var ajax = $.ajax({
    url: e.target.href

  }).done(addToPage)
}

function addToPage (e) {
  $('.main-content').empty().append(e)
}

function getOverlayContent (e) {
  e.preventDefault()
  var ajax = $.ajax({
    url: e.target.href

  }).done(overlayContent)
}


var overlayContent = function(e) {
  $('html').append('<div class="shadow"></div>')
  $('.main-content').prepend(e)
  $('.email-textfield').one('click', emailSend)
  $('.close').one('click', cancel)
}

var emailSend = function(e) {
  e.preventDefault()
  var ajax = $.ajax({
    url: e.target.href

  })
  $('.email-textfield').append('Sending...')
  ajax.done(emailSent)
  ajax.error(emailError)
}

var emailSent = function() {
  toggleEmailForm()
  $('.email-status').text('Email sent')
}

var emailError = function() {
  toggleEmailForm()
  $('.email-status').text('Error, please try again')
}

var cancel = function() {
  toggleEmailForm()
}

var toggleEmailForm = function() {
  $('.shadow').remove()
  $('.email-form').remove()
  $('.email').one('click', emailSend)
  $('.email-link').one('click', getOverlayContent)
}