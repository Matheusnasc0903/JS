var date = new Date()
var hours = date.getHours()
var minutes = date.getMinutes()
var clock = document.getElementById('clock')
var image = document.getElementById('iamge')

clock.innerHTML = `${hours}:${minutes}`