$(document).ready(bindListeners)

function bindListeners () {
  $('.content-links').one('click', gethtml)
}

function gethtml (e) {
  e.preventDefault()
  var ajax = $.ajax({
    url: e.target.href

  }).done(addToPage)
}

function addToPage (e) {
  $('.main-content').empty()
  $('.main-content').append(e)
}