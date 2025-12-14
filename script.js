alert('Welcome to My Medical Reminder App!');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var date = new Date();
var hours = date.getHours();

var hours12 = hours % 12 || 12;
var minute = date.getMinutes();
var AmPm = hours >= 12 ? 'PM' : 'AM';
var second = date.getSeconds();
console.log(hours12+":"+minute+" "+AmPm+" "+second);





