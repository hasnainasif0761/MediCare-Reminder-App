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
    

}









