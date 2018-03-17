var d = new Date();
var w = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var n = d.getDate();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var y = d.getFullYear();
var today = w[d.getDay()] + ", " + n + " " + m[d.getMonth()] + " " + y;
document.getElementById('today').innerHTML = today;