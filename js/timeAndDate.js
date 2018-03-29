/* Add time and date to terminal */ 
var timeDate = moment().format('llll');
document.getElementById('info-line').innerHTML = "Last login " + timeDate;
