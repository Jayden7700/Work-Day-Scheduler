// moment for current time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentTime = moment();
// Returns current time to the nearest hour
currentTime = currentTime.startOf("hour");
// Calculates the start of day
var beforeTime = moment().startOf('day').add(9, "hours");

//Time blocks 
//9 AM 
var time1 = beforetime.add(0, "h")
