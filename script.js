alert('Welcome to My Medical Reminder App!');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var medicine = [
    {
        name: 'Aspirin',
        quantity: "2 tablets",
        hour: 9,
        minte: 0,
        period: 'AM',
    },
    {
        name: 'Panadol',
        quantity: "1 tablet",
        hour: 2,
        minte: 30,
        period: 'PM',
    },
    {
        name: 'Disprin',
        quantity: "1 tablet",
        hour: 8,
        minte: 15,
        period: 'AM',
    }

];

function medicineReminder() {
    var date = new Date();

    // Gt Current day
    var today = days[date.getDay()];

    // Get 24 hourse Time
    var hours = date.getHours();
    var minute = date.getMinutes();


    // Convert 24 hourse to 12 hourse formate
    var hour2 = hours % 12 || 12;
    var period = hours >= 12 ? 'PM' : 'AM';

    console.log("Today is: " + today);
    console.log("Current Time:",hour2+":"+minute+" "+period);
    console.log("-------------------------------------=");

    var medicineFound = false;

    for(var i = 0; i < medicine.length; i++) {

}
// medicineReminder();









